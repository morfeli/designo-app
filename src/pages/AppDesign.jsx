import React, { Fragment } from "react";
import GraphicCard from "../components/Cards/GraphicCard";
import HeroApp from "../components/Hero/HeroApp";
import AppDesignCards from "../components/Cards/AppDesignCards";
import GetInTouch from "../components/Contact/GetInTouch";
import "./styles/AppDesign.scss";
import WebCardDesktop from "../components/Cards/WebCardDesktop";

const AppDesign = () => {
  return (
    <Fragment>
      <HeroApp />
      <AppDesignCards />
      <div className="container-app">
        <WebCardDesktop />
        <GraphicCard />
      </div>
      <GetInTouch />
    </Fragment>
  );
};

export default AppDesign;
