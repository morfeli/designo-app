import React, { Fragment } from "react";
import CardSection from "../components/Cards/CardSection";
import HeroHome from "../components/Hero/HeroHome";
import Characteristics from "../components/Characteristics /Characteristics";
import GetInTouch from "../components/Contact/GetInTouch";

const HomePage = () => {
  return (
    <Fragment>
      <HeroHome />
      <CardSection />
      <Characteristics />
      <GetInTouch />
    </Fragment>
  );
};

export default HomePage;
