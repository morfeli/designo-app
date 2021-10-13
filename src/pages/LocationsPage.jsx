import React, { Fragment } from "react";
import GetInTouch from "../components/Contact/GetInTouch";
import Locations from "../components/Locations/Locations";

const LocationsPage = () => {
  return (
    <Fragment>
      <Locations />
      <GetInTouch />
    </Fragment>
  );
};

export default LocationsPage;
