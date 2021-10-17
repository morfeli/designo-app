import React, { Fragment } from "react";
import WebCard from "../components/Cards/WebCard";
import GraphicCard from "../components/Cards/GraphicCard";
import HeroApp from "../components/Hero/HeroApp";
import AppDesignCards from "../components/Cards/AppDesignCards";
import GetInTouch from "../components/Contact/GetInTouch";
import "./styles/AppDesign.scss";

const AppDesign = () => {
  return (
    <Fragment>
      <HeroApp />
      <AppDesignCards />
      <div className="container-app">
        <WebCard />
        <GraphicCard />
      </div>
      <GetInTouch />
    </Fragment>
  );
};

export default AppDesign;
