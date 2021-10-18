import React, { Fragment } from "react";
import HeroGraphic from "../components/Hero/HeroGraphic";
import AppCard from "../components/Cards/AppCard";
import GetInTouch from "../components/Contact/GetInTouch";
import GraphicDesignCards from "../components/Cards/GraphicDesignCards";
import "./styles/GraphicDesign.scss";
import WebCardDesktop from "../components/Cards/WebCardDesktop";

const GraphicDesign = () => {
  return (
    <Fragment>
      <HeroGraphic />
      <GraphicDesignCards />
      <div className="container-graphic">
        <AppCard />
        <WebCardDesktop />
      </div>
      <GetInTouch />
    </Fragment>
  );
};

export default GraphicDesign;
