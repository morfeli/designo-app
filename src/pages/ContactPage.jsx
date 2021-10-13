import React, { Fragment } from "react";
import Form from "../components/Contact/Form";
import LocationCards from "../components/About/LocationCards";

const ContactPage = () => {
  return (
    <Fragment>
      <Form />
      <LocationCards />
    </Fragment>
  );
};

export default ContactPage;
