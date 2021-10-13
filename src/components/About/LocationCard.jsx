import React from "react";

const LocationCard = (props) => {
  return (
    <div className="aboutlocation__container">
      <img src={props.image} alt="Location Image" />
      <h3>{props.title}</h3>
      <button>SEE LOCATION</button>
    </div>
  );
};

export default LocationCard;
