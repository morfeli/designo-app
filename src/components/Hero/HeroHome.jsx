import React from "react";
import HeroImg from "../../assets/home/desktop/image-hero-phone.png";
import { Link } from "react-router-dom";
import "./styles/HeroHome.scss";

const HeroHome = () => {
  return (
    <section className="hero__container">
      <div className="hero__container--bitMap">
        <div className="hero__container--textBox">
          <h1 className="hero__container--h1">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="hero__container--p">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <Link to="/about">
            <button className="hero__container--btn">LEARN MORE</button>
          </Link>
        </div>
        <div className="hero__container--imgBox">
          <img
            className="hero__container--img"
            src={HeroImg}
            alt="Frame iPhone Image"
          />
        </div>
      </div>
      <div className="desktop-bitmap"></div>
    </section>
  );
};

export default HeroHome;
