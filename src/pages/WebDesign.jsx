import React, { Fragment } from "react";
import HeroWeb from "../components/Hero/HeroWeb";
import AppCard from "../components/Cards/AppCard";
import GetInTouch from "../components/Contact/GetInTouch";
import GraphicCard from "../components/Cards/GraphicCard";
import WebDesignCards from "../components/Cards/WebDesignCards";
import "./styles/WebDesign.scss";

const WebDesign = () => {
  return (
    <Fragment>
      <HeroWeb />
      <WebDesignCards />
      <div className="container">
        <AppCard />
        <GraphicCard />
      </div>
      <GetInTouch />
    </Fragment>
  );
};

export default WebDesign;
