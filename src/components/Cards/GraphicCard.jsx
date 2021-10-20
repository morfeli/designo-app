import React from "react";
import "./styles/Cards.scss";
import { Link } from "react-router-dom";
import ArrowSVG from "./ArrowSVG";

const GraphicCard = () => {
  return (
    <Link style={{ textDecoration: "none" }} to="/graphic-design">
      <div className="graphicdesign__container">
        <h1 style={{ color: "white" }} className="graphicdesign__container--h1">
          Graphic Design
        </h1>
        <div className="graphicdesign__container--box">
          <p className="graphicdesign__container--p">View Projects</p>
          <ArrowSVG />
        </div>
      </div>
    </Link>
  );
};

export default GraphicCard;
