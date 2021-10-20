import React from "react";
import "./styles/Cards.scss";
import { Link } from "react-router-dom";

const AppCard = () => {
  return (
    <Link style={{ textDecoration: "none" }} to="/app-design">
      <div className="appdesign__container">
        <h1 className="appdesign__container--h1">App Design</h1>
        <p className="appdesign__container--p">View Projects</p>
      </div>
    </Link>
  );
};

export default AppCard;
