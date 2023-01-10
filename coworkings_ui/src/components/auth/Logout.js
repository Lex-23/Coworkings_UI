import { useEffect } from "react";
import axiosInstance from "../Axios";

export const Logout = () => {
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axiosInstance.post("/api/logout/", {
          refresh_token: localStorage.getItem("refresh_token"),
        });

        console.log("logout", data);
        localStorage.clear();
        axiosInstance.defaults.headers.common["Authorization"] = null;
        window.location.href = "/login";
      } catch (e) {
        console.log("logout not working");
        console.log(e);
      }
    })();
  }, []);

  return <div></div>;
};
