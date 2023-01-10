import { useEffect, useState } from "react";
import axios from "axios";

const BaseURL = process.env.REACT_APP_BASE_URL;

const JWTPrefix = "Bearer ";

export const AuthPing = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      window.location.href = "/login";
    } else {
      (async () => {
        try {
          const { data } = await axios.get(`${BaseURL}/api/auth-ping/`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: localStorage.getItem("access_token")
                ? JWTPrefix + localStorage.getItem("access_token")
                : null,
            },
          });

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
