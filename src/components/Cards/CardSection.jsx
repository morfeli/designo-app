import React from "react";
import AppCard from "./AppCard";
import WebCard from "./WebCard";
import GraphicCard from "./GraphicCard";
import "./CardSection.scss";

const CardSection = () => {
  return (
    <div className="card__section">
      <WebCard />
      <AppCard />
      <GraphicCard />
    </div>
  );
};

export default CardSection;
