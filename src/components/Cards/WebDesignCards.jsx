import React, { Fragment } from "react";
import WebCards from "./WebCards";
import expressImg from "../../assets/web-design/desktop/image-express.jpg";
import transferImg from "../../assets/web-design/desktop/image-transfer.jpg";
import photonImg from "../../assets/web-design/desktop/image-photon.jpg";
import builderImg from "../../assets/web-design/desktop/image-builder.jpg";
import blogrImg from "../../assets/web-design/desktop/image-blogr.jpg";
import campImg from "../../assets/web-design/desktop/image-camp.jpg";
import "./WebDesignCards.scss";

const DUMMY_WEBCARDS = [
  {
    id: "0",
    image: expressImg,
    title: "EXPRESS",
    description: "A multi-carrier shipping website for ecommerce businesses",
  },
  {
    id: "1",
    image: transferImg,
    title: "TRANSFER",
    description:
      "Site for low-cost money transfers and sending money within seconds",
  },
  {
    id: "2",
    image: photonImg,
    title: "PHOTON",
    description:
      "A state-of-the-art music player with high-resolution audio and DSP effects",
  },
  {
    id: "3",
    image: builderImg,
    title: "BUILDER",
    description:
      "Connects users with local contractors based on their location",
  },
  {
    id: "4",
    image: blogrImg,
    title: "BLOGR",
    description:
      "Blogr is a platform for creating an online blog or publication",
  },
  {
    id: "5",
    image: campImg,
    title: "CAMP",
    description:
      "Get expert training in coding, data, design, and digital marketing",
  },
];

const WebDesignCards = () => {
  return (
    <ul className="webdesign__ul">
      {DUMMY_WEBCARDS.map((item) => (
        <WebCards
          key={item.id}
          title={item.title}
          image={item.image}
          description={item.description}
        />
      ))}
    </ul>
  );
};

export default WebDesignCards;
