import React from "react";
import "./LocationCard.scss";

const LocationCard = (props) => {
  const { image, title, where, address1, address2, phone, mail } = props;
  return (
    <li className="locationcard__container">
      <div className="locationcard__container--imgBox">
        <img
          className="locationcard__container--img"
          src={image}
          alt="Location Map"
        />
      </div>

      <div className="locationcard__container--box">
        <div className="locationcard__container--textBox">
          <h1 className="locationcard__container--title">{title}</h1>
          <p className="locationcard__container--strong">{where}</p>
          <p className="locationcard__container--p">{address1}</p>
          <p className="locationcard__container--p">{address2}</p>
        </div>

        <div className="locationcard__container--contactBox">
          <p className="locationcard__container--contact">Contact</p>
          <p className="locationcard__container--p">
            P : <span>{phone}</span>
          </p>
          <p className="locationcard__container--p">
            M :<span>{mail}</span>
          </p>
        </div>
      </div>
    </li>
  );
};

export default LocationCard;
