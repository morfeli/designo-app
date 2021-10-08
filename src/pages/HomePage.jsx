import React, { Fragment } from "react";
import CardSection from "../components/Cards/CardSection";
import HeroHome from "../components/Hero/HeroHome";

const HomePage = () => {
  return (
    <Fragment>
      <HeroHome />
      <CardSection />
    </Fragment>
  );
};

export default HomePage;
