import React from "react";
import { Link } from "react-router-dom";

const CoworkingDetail = ({ coworking }) => {
  if (!coworking) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="ui segment">
        <h4 className="ui header">{coworking.title}</h4>
        <p>City: {coworking.city}</p>
        <p>Address: {coworking.address}</p>
        <p>Description: {coworking.description}</p>
        <p>From: {coworking.opening_time}</p>
        <p>To: {coworking.closing_time}</p>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Link to={`/coworking/${coworking.id}`}>
            <button>Detail</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoworkingDetail;
