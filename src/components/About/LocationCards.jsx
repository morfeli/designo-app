import React from "react";
import canadaImg from "../../assets/shared/desktop/illustration-canada.svg";
import australiaImg from "../../assets/shared/desktop/illustration-australia.svg";
import ukImg from "../../assets/shared/desktop/illustration-united-kingdom.svg";
import LocationCard from "./LocationCard";

const DUMMY_LOCATIONS = [
  { id: "first", image: canadaImg, title: "Canada" },
  { id: "second", image: australiaImg, title: "Australia" },
  { id: "third", image: ukImg, title: "United Kingdom" },
];

const LocationCards = () => {
  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "375px",
        height: "1188px",
        justifyContent: "space-evenly",
        margin: "0 auto",
      }}
    >
      {DUMMY_LOCATIONS.map((location) => (
        <LocationCard
          key={location.id}
          id={location.id}
          image={location.image}
          title={location.title}
        />
      ))}
    </ul>
  );
};

export default LocationCards;
