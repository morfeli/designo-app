import React from "react";
import { Link } from "react-router-dom";
import "./styles/Footer.scss";
import logo from "../../assets/shared/desktop/logo-light.png";
import FacebookSVG from "./FacebookSVG";
import YoutubeSVG from "./YoutubeSVG";
import TwitterSVG from "./TwitterSVG";
import PintrestSVG from "./PintrestSVG";
import InstagramSVG from "./InstagramSVG";

const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="footer__container--innerBox">
        <div className="footer__container--linkBox">
          <Link style={{ textDecoration: "none" }} to="/">
            <img className="footer__container--img" src={logo} alt="logo" />
          </Link>
          <hr className="footer__container--divider" />
          <ul className="footer__container--ul">
            <Link style={{ textDecoration: "none" }} to="/about">
              <li className="footer__container--li">OUR COMPANY</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/locations">
              <li className="footer__container--li">LOCATIONS</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/contact">
              <li className="footer__container--li">CONTACT</li>
            </Link>
          </ul>
        </div>
        <hr className="footer__container--dividerDesktop" />
        <div className="footer__container--textBoxes">
          <div className="footer__container--textBox">
            <p className="footer__container--strong">Designo Central Office</p>
            <p className="footer__container--p">3886 Wellington Street</p>
            <p className="footer__container--p">Toronto, Ontario M9C 3J5</p>
          </div>

          <div className="footer__container--textBox">
            <p className="footer__container--strong">
              Contact Us (Central Office)
            </p>
            <p className="footer__container--p">P : +1 253-863-8967</p>
            <p className="footer__container--p">M : contact@designo.co</p>
          </div>
          <div className="footer__container--socialBox">
            <FacebookSVG />
            <YoutubeSVG />
            <TwitterSVG />
            <PintrestSVG />
            <InstagramSVG />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
