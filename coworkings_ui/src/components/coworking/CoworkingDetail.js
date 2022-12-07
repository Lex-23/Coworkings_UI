import React from "react";

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
      </div>
    </div>
  );
};

export default CoworkingDetail;
