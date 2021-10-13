import React, { Fragment } from "react";
import HeroWeb from "../components/Hero/HeroWeb";
import AppCard from "../components/Cards/AppCard";
import GetInTouch from "../components/Contact/GetInTouch";
import GraphicCard from "../components/Cards/GraphicCard";
import WebDesignCards from "../components/Cards/WebDesignCards";

const WebDesign = () => {
  return (
    <Fragment>
      <HeroWeb />
      <WebDesignCards />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "600px",
          justifyContent: "space-between",
        }}
        className="container"
      >
        <AppCard />
        <GraphicCard />
      </div>
      <GetInTouch />
    </Fragment>
  );
};

export default WebDesign;
