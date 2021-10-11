import React, { Fragment } from "react";
import HeroGraphic from "../components/Hero/HeroGraphic";
import AppCard from "../components/Cards/AppCard";
import WebCard from "../components/Cards/WebCard";
import GetInTouch from "../components/Contact/GetInTouch";
import GraphicDesignCards from "../components/Cards/GraphicDesignCards";

const GraphicDesign = () => {
  return (
    <Fragment>
      <HeroGraphic />
      <GraphicDesignCards />
      <div
        style={{ display: "flex", flexDirection: "column" }}
        className="container"
      >
        <AppCard />
        <WebCard />
      </div>
      <GetInTouch />
    </Fragment>
  );
};

export default GraphicDesign;
