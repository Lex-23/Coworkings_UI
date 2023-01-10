import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

let refresh = false;

const JWTPrefix = "Bearer ";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeiut: 5000,
  headers: {
    Authorization: localStorage.getItem("access_token")
      ? JWTPrefix + localStorage.getItem("access_token")
      : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

axios.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    if (error.response.status === 401 && !refresh) {
      refresh = true;

      console.log(localStorage.getItem("refresh_token"));
      const response = await axiosInstance.post(
        "/api/auth/refresh/",
        {
          refresh: localStorage.getItem("refresh_token"),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
        { withCredentials: true }
      );

      if (response.status === 200) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data["access"]}`;
        localStorage.setItem("access_token", response.data.access);
        localStorage.setItem("refresh_token", response.data.refresh);

        return axios(error.config);
      }
    }
    refresh = false;
    return error;
  }
);

export default axiosInstance;
