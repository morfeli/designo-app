import React from "react";
import "./LocationCard.scss";

const LocationCard = (props) => {
  return (
    <li className="location__li" id={props.id}>
      <div className="location__li--imgBox">
        <img
          className="location__li--img"
          src={props.image}
          alt="Location Image"
        />
      </div>
      <h3 className="location__li--h3">{props.title}</h3>
      <button className="location__li--btn">SEE LOCATION</button>
    </li>
  );
};

export default LocationCard;
