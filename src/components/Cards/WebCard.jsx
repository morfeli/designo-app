import React from "react";
import "./styles/Cards.scss";
import { Link } from "react-router-dom";
import ArrowSVG from "./ArrowSVG";

const WebCard = () => {
  return (
    <Link style={{ textDecoration: "none" }} to="/web-design">
      <div className="webdesign__container">
        <h1 className="webdesign__container--h1">Web Design</h1>
        <div className="webdesign__container--box">
          <p className="webdesign__container--p">View Projects</p>
          <ArrowSVG />
        </div>
      </div>
    </Link>
  );
};

export default WebCard;
