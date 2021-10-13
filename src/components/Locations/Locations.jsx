import React from "react";
import canadaMap from "../../assets/locations/desktop/image-map-canada.png";
import australiaMap from "../../assets/locations/desktop/image-map-australia.png";
import ukMap from "../../assets/locations/desktop/image-map-united-kingdom.png";
import LocationCard from "./LocationCard";

const DUMMY_MAP = [
  {
    id: "0",
    image: canadaMap,
    title: "Canada",
    where: "Designo Central Office",
    address1: "3886 Wellington Street",
    address2: "Toronto, Ontario MPC 3j5",
    phone: "+1 253-863-8967",
    mail: "contact@designo.co",
  },
  {
    id: "1",
    image: australiaMap,
    title: "Australia",
    where: "Designo AU Office",
    address1: "19 Baloone Street",
    address2: "New South Wales 2443",
    phone: "(02) 6720 9092",
    mail: "contact@designo.au",
  },
  {
    id: "3",
    image: ukMap,
    title: "United Kingdom",
    where: "Designo UK Office",
    address1: "13 Colorado Way",
    address2: "Rhyd-y-fro SA8 9GA",
    phone: "078 3115 1400",
    mail: "contact@designo.uk",
  },
];

const Locations = () => {
  return (
    <ul>
      {DUMMY_MAP.map((location) => (
        <LocationCard
          key={location.id}
          image={location.image}
          title={location.title}
          where={location.where}
          address1={location.address1}
          address2={location.address2}
          phone={location.phone}
          mail={location.mail}
        />
      ))}
    </ul>
  );
};

export default Locations;