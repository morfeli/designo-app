import React, { Fragment } from "react";
import WebCard from "../components/Cards/WebCard";
import GraphicCard from "../components/Cards/GraphicCard";
import HeroApp from "../components/Hero/HeroApp";
import AppDesignCards from "../components/Cards/AppDesignCards";
import GetInTouch from "../components/Contact/GetInTouch";

const AppDesign = () => {
  return (
    <Fragment>
      <HeroApp />
      <AppDesignCards />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "600px",
          justifyContent: "space-between",
        }}
        className="container"
      >
        <WebCard />
        <GraphicCard />
      </div>
      <GetInTouch />
    </Fragment>
  );
};

export default AppDesign;
