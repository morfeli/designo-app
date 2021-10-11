import React, { Fragment } from "react";
import WebCard from "../components/Cards/WebCard";
import GraphicCard from "../components/Cards/GraphicCard";
import HeroApp from "../components/Hero/HeroApp";
import AppDesignCards from "../components/Cards/AppDesignCards";

const AppDesign = () => {
  return (
    <Fragment>
      <HeroApp />
      <AppDesignCards />
      <div
        style={{ display: "flex", flexDirection: "column" }}
        className="container"
      >
        <WebCard />
        <GraphicCard />
      </div>
    </Fragment>
  );
};

export default AppDesign;
