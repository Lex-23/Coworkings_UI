import React from "react";

const CoworkingItem = ({ coworking, onCoworkingSelect }) => {
  return (
    <div
      onClick={() => onCoworkingSelect(coworking)}
      className="coworking-item item"
    >
      <div className="content">
        <div className="header">{coworking.title}</div>
        <div>{coworking.city}</div>
        <div>
          <p>status: {coworking.status}</p>
        </div>
      </div>
    </div>
  );
};

export default CoworkingItem;
