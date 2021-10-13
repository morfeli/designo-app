import React from "react";
import canadaImg from "../../assets/shared/desktop/illustration-canada.svg";
import australiaImg from "../../assets/shared/desktop/illustration-australia.svg";
import ukImg from "../../assets/shared/desktop/illustration-united-kingdom.svg";
import LocationCard from "./LocationCard";

const DUMMY_LOCATIONS = [
  {
    image: canadaImg,
    title: "Canada",
  },
  {
    image: australiaImg,
    title: "Australia",
  },
  {
    image: ukImg,
    title: "United Kingdom",
  },
];

const LocationCards = () => {
  return (
    <h1>
      {DUMMY_LOCATIONS.map((location) => (
        <LocationCard image={location.image} title={location.title} />
      ))}
    </h1>
  );
};

export default LocationCards;
