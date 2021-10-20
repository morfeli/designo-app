import React from "react";
import "./styles/CharacterCard.scss";

const CharacterCards = (props) => {
  return (
    <li className="li__container" id={props.id}>
      <div className="li__container--imgBox">
        <img className="li__container--img" src={props.image} alt="img" />
      </div>
      <div className="li__container--textBox">
        <h1 className="li__container--h1">{props.title}</h1>
        <p className="li__container--p">{props.description}</p>
      </div>
    </li>
  );
};

export default CharacterCards;
