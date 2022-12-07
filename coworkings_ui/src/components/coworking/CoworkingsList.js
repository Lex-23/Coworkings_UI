import React from "react";
import CoworkingItem from "./CoworkingItem";

const CoworkingList = ({ coworkings, onCoworkingSelect }) => {
  const renderedList = coworkings.map((coworking) => {
    return (
      <CoworkingItem
        onCoworkingSelect={onCoworkingSelect}
        key={coworking.id}
        coworking={coworking}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default CoworkingList;
