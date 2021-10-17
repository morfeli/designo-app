import React from "react";
import "./HeroAbout.scss";
import workStationImg from "../../assets/about/desktop/image-about-hero.jpg";

const HeroAbout = () => {
  return (
    <section className="aboutus__container">
      <div className="aboutus__container--imgBox">
        <div className="aboutus__container--img"></div>
      </div>
      <h1 className="aboutus__container--h1">About Us</h1>
      <p className="aboutus__container--p">
        Founded in 2010, we are a creative agency that produces lasting results
        for our clients. We’ve partnered with many startups, corporations, and
        nonprofits alike to craft designs that make real impact. We’re always
        looking forward to creating brands, products, and digital experiences
        that connect with our clients’ audiences.
      </p>
    </section>
  );
};

export default HeroAbout;
