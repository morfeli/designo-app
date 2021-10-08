import React, { Fragment } from "react";
import AppCard from "./AppCard";
import WebCard from "./WebCard";
import GraphicCard from "./GraphicCard";

const CardSection = () => {
  return (
    <Fragment>
      <WebCard />
      <AppCard />
      <GraphicCard />
    </Fragment>
  );
};

export default CardSection;
