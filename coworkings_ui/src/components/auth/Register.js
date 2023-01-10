import { useState } from "react";
import axiosInstance from "../Axios";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [role, setRole] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    const register_user = {
      email: email,
      password: password,
      password2: password2,
      role: role,
    };

    const { data } = await axiosInstance.post("/api/register/", register_user);

    window.location.href = "/login";
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={submit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              className="form-control mt-1"
              placeholder="Enter Email"
              name="email"
              type="text"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              name="password"
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Repeat Password</label>
            <input
              name="password"
              type="password"
              className="form-control mt-1"
              placeholder="Repeat password"
              value={password2}
              required
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Role</label>
            <input
              name="password"
              type="password"
              className="form-control mt-1"
              placeholder="Enter role"
              value={role}
              required
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
