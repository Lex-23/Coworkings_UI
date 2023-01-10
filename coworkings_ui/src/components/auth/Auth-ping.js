import { useEffect, useState } from "react";
import axiosInstance from "../Axios";

export const AuthPing = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      window.location.href = "/login";
    } else {
      (async () => {
        try {
          const { data } = await axiosInstance.get("/api/auth-ping/");

          setMessage(data.message);
        } catch (e) {
          console.log("not auth");
        }
      })();
    }
  }, []);

  return (
    <div className="form-signin mt-5 text-center">
      <h3>{message}</h3>
    </div>
  );
};
