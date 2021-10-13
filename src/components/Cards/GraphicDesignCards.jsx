import React from "react";
import GraphicCards from "./GraphicCards";
import timbrownImg from "../../assets/graphic-design/desktop/image-change.jpg";
import boxWater from "../../assets/graphic-design/desktop/image-boxed-water.jpg";
import keepupImg from "../../assets/graphic-design/desktop/image-science.jpg";

const DUMMY_GRAPHICCARDS = [
  {
    id: "0",
    image: timbrownImg,
    title: "TIM BROWN",
    description: "A book cover designed for Tim Brown’s new release, ‘Change’",
  },
  {
    id: "1",
    image: boxWater,
    title: "BOXED WATER",
    description: "A simple packaging concept made for Boxed Water",
  },
  {
    id: "2",
    image: keepupImg,
    title: "SCIENCE!",
    description: "A simple packaging concept made for Boxed Water",
  },
];

const GraphicDesignCards = () => {
  return (
    <ul className="appdesign__ul">
      {DUMMY_GRAPHICCARDS.map((item) => (
        <GraphicCards
          image={item.image}
          key={item.id}
          title={item.title}
          description={item.description}
        />
      ))}
    </ul>
  );
};

export default GraphicDesignCards;
