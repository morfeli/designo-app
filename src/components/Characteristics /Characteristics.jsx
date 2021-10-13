import React from "react";
import CharacterCards from "./CharacterCards";
import passionateImg from "../../assets/home/desktop/illustration-passionate.svg";
import resourcefulImg from "../../assets/home/desktop/illustration-resourceful.svg";
import friendlyImg from "../../assets/home/desktop/illustration-friendly.svg";
import "./Characteristics.scss";

const DUMMY_ARRAY = [
  {
    id: "first",
    image: passionateImg,
    title: "Passionate",
    description:
      "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
  },
  {
    id: "second",
    image: resourcefulImg,
    title: "Resourceful",
    description:
      "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
  },
  {
    id: "third",
    image: friendlyImg,
    title: "Friendly",
    description:
      " We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
  },
];

const Characteristics = () => {
  return (
    <ul className="characteristics__ul">
      {DUMMY_ARRAY.map((item) => (
        <CharacterCards
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          description={item.description}
        />
      ))}
    </ul>
  );
};

export default Characteristics;
