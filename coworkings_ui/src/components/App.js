import "./App.css";
import React from "react";
import CoworkingListPage from "./coworking/CoworkingListPage";
import CoworkingDetailPage from "./coworking/CoworkingDetailPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./navigations/Navigation";
import { Login } from "./auth/Login";
import { Logout } from "./auth/Logout";
import { SignUp } from "./auth/Register";
import { AuthPing } from "./auth/Auth-ping";

const App = ({ coworking }) => {
  return (
    <div className="ui container">
      <Router>
        <Navigation></Navigation>
        <Routes>
          <Route
            path="/coworking/:id"
            element={<CoworkingDetailPage coworking={coworking} />}
          ></Route>
          <Route exact path="/" element={<CoworkingListPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/auth-ping" element={<AuthPing />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
