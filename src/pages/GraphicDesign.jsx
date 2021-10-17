import React, { Fragment } from "react";
import HeroGraphic from "../components/Hero/HeroGraphic";
import AppCard from "../components/Cards/AppCard";
import WebCard from "../components/Cards/WebCard";
import GetInTouch from "../components/Contact/GetInTouch";
import GraphicDesignCards from "../components/Cards/GraphicDesignCards";
import "./styles/GraphicDesign.scss";

const GraphicDesign = () => {
  return (
    <Fragment>
      <HeroGraphic />
      <GraphicDesignCards />
      <div className="container-graphic">
        <AppCard />
        <WebCard />
      </div>
      <GetInTouch />
    </Fragment>
  );
};

export default GraphicDesign;
