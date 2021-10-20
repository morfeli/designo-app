import React from "react";
import MobileMenuBtn from "./MobileMenuBtn";
import { NavLink, Link } from "react-router-dom";
import "./styles/Header.scss";
import Logo from "../../assets/shared/desktop/logo-dark.png";

const Header = () => {
  return (
    <header className="header__container">
      <Link to="/">
        <img
          className="header__container--logo"
          src={Logo}
          alt="Designo Logo"
        />
      </Link>
      <MobileMenuBtn />
      <nav className="header__container--nav">
        <ul className="header__container--ul">
          <li className="header__container--li">
            <NavLink to="/about">Our Company</NavLink>
          </li>
          <li className="header__container--li">
            <NavLink to="/locations">Locations</NavLink>
          </li>
          <li className="header__container--li">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
