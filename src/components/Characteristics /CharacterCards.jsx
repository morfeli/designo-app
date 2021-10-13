import "./CharacterCard.scss";
import React from "react";

const CharacterCards = (props) => {
  return (
    <li className="li__container" id={props.id}>
      <div className="li__container--imgBox">
        <img className="li__container--img" src={props.image} alt="img" />
      </div>
      <h1 className="li__container--h1">{props.title}</h1>
      <p className="li__container--p">{props.description}</p>
    </li>
  );
};

export default CharacterCards;
