import React from "react";
import AppCards from "./AppCards";
import airfilterImg from "../../assets/app-design/desktop/image-airfilter.jpg";
import eyecamImg from "../../assets/app-design/desktop/image-eyecam.jpg";
import faceitImg from "../../assets/app-design/desktop/image-faceit.jpg";
import todoImg from "../../assets/app-design/desktop/image-todo.jpg";
import loopstudiosImg from "../../assets/app-design/desktop/image-loopstudios.jpg";
import "./AppDesignCards.scss";

const DUMMY_APPCARDS = [
  {
    id: "0",
    image: airfilterImg,
    title: "AIRFILTER",
    description: "A multi-carrier shipping website for ecommerce businesses",
  },
  {
    id: "1",
    image: eyecamImg,
    title: "EYECAM",
    description:
      "Site for low-cost money transfers and sending money within seconds",
  },
  {
    id: "2",
    image: faceitImg,
    title: "FACEIT",
    description:
      "A state-of-the-art music player with high-resolution audio and DSP effects",
  },
  {
    id: "3",
    image: todoImg,
    title: "TODO",
    description:
      "Connects users with local contractors based on their location",
  },
  {
    id: "4",
    image: loopstudiosImg,
    title: "LOOPSTUDIOS",
    description:
      "Blogr is a platform for creating an online blog or publication",
  },
];

const AppDesignCards = () => {
  return (
    <ul className="appdesign__ul">
      {DUMMY_APPCARDS.map((item) => (
        <AppCards
          image={item.image}
          key={item.id}
          title={item.title}
          description={item.description}
        />
      ))}
    </ul>
  );
};

export default AppDesignCards;
