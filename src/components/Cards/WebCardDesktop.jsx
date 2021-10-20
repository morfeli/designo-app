import React from "react";
import "./styles/WebCardDesktop.scss";
import { Link } from "react-router-dom";

const WebCardDesktop = () => {
  return (
    <Link style={{ textDecoration: "none" }} to="/web-design">
      <div className="webdesignDesktop__container">
        <h1 className="webdesignDesktop__container--h1">Web Design</h1>
        <p className="webdesignDesktop__container--p">View Projects</p>
      </div>
    </Link>
  );
};

export default WebCardDesktop;
