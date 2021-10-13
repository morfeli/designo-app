import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import logo from "../../assets/shared/desktop/logo-light.png";
import facebook from "../../assets/shared/desktop/icon-facebook.svg";
import youtube from "../../assets/shared/desktop/icon-youtube.svg";
import twitter from "../../assets/shared/desktop/icon-twitter.svg";
import pintrest from "../../assets/shared/desktop/icon-pinterest.svg";
import instagram from "../../assets/shared/desktop/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="footer__container--innerBox">
        <Link style={{ textDecoration: "none" }} to="/">
          <img className="footer__container--img" src={logo} alt="logo" />
        </Link>
        <hr className="footer__container--divider" />
        <ul className="footer__container--ul">
          <Link style={{ textDecoration: "none" }} to="/aboutus">
            <li className="footer__container--li">OUR COMPANY</li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/locations">
            <li className="footer__container--li">LOCATIONS</li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/contact">
            <li className="footer__container--li">CONTACT</li>
          </Link>
        </ul>
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
          <img src={facebook} alt="facebook" />
          <img src={youtube} alt="youtube" />
          <img src={twitter} alt="twitter" />
          <img src={pintrest} alt="pintrest" />
          <img src={instagram} alt="instagram" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
