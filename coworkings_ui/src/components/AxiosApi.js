import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;
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
