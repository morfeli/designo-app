import React, { Fragment } from "react";
import HeroAbout from "../components/About/HeroAbout";
import LocationCards from "../components/About/LocationCards";
import Talet from "../components/About/Talent";
import RealDeal from "../components/About/RealDeal";
import GetInTouch from "../components/Contact/GetInTouch";

const AboutUs = () => {
  return (
    <Fragment>
      <HeroAbout />
      <Talet />
      <LocationCards />
      <RealDeal />
      <GetInTouch />
    </Fragment>
  );
};

export default AboutUs;
