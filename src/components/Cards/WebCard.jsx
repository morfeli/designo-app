import React from "react";
import "./Cards.scss";
import { Link } from "react-router-dom";

const WebCard = () => {
  return (
    <Link style={{ textDecoration: "none" }} to="/web-design">
      <div className="webdesign__container">
        <h1 className="webdesign__container--h1">Web Design</h1>
        <p className="webdesign__container--p">View Projects</p>
      </div>
    </Link>
  );
};

export default WebCard;
