import React from "react";
import "./styles/WebCardDesktop.scss";
import { Link } from "react-router-dom";
import ArrowSVG from "./ArrowSVG";

const WebCardDesktop = () => {
  return (
    <Link style={{ textDecoration: "none" }} to="/web-design">
      <div className="webdesignDesktop__container">
        <h1 className="webdesignDesktop__container--h1">Web Design</h1>
        <div className="webdesignDesktop__container--box">
          <p className="webdesignDesktop__container--p">View Projects</p>
          <ArrowSVG />
        </div>
      </div>
    </Link>
  );
};

export default WebCardDesktop;
