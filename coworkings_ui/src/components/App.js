import React from "react";
import CoworkingListPage from "./coworking/CoworkingListPage";
import CoworkingDetailPage from "./coworking/CoworkingDetailPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = ({ coworking }) => {
  return (
    <div className="ui container">
      <Router>
        <Routes>
          <Route
            path="/coworking/:id"
            element={<CoworkingDetailPage coworking={coworking} />}
          ></Route>
          <Route exact path="/" element={<CoworkingListPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
