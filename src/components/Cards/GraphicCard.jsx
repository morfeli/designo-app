import React from "react";
import "./Cards.scss";
import { Link } from "react-router-dom";

const GraphicCard = () => {
  return (
    <Link style={{ textDecoration: "none" }} to="/graphic-design">
      <div className="graphicdesign__container">
        <h1 style={{ color: "white" }} className="graphicdesign__container--h1">
          Graphic Design
        </h1>
        <p className="graphicdesign__container--p">View Projects</p>
      </div>
    </Link>
  );
};

export default GraphicCard;
