import React from "react";
import { Link } from "react-router-dom";
import "./styles/LocationCard.scss";

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
      <Link to="/locations">
        <button className="location__li--btn">SEE LOCATION</button>
      </Link>
    </li>
  );
};

export default LocationCard;
