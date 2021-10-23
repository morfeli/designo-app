import React, { useState } from "react";
import MobileMenuBtn from "./MobileMenuBtn";
import { Link } from "react-router-dom";
import "./styles/Header.scss";
import Logo from "../../assets/shared/desktop/logo-dark.png";

const Header = () => {
  const [state, setState] = useState(false);

  const showMenuHandler = () => {
    setState(!state);
  };

  const closeMenuHandler = () => {
    setState(false);
  };

  let navClasses = "header__container--nav";

  if (state) {
    navClasses = "header__container--nav open";
  } else if (!state) {
    navClasses = "header__container--nav";
  }

  return (
    <header className="header__container">
      <Link to="/">
        <img
          className="header__container--logo"
          src={Logo}
          alt="Designo Logo"
        />
      </Link>
      <nav className={navClasses}>
        <ul className="header__container--ul">
          <li className="header__container--li">
            <Link className="link" to="/about" onClick={closeMenuHandler}>
              Our Company
            </Link>
          </li>
          <li className="header__container--li">
            <Link className="link" to="/locations" onClick={closeMenuHandler}>
              Locations
            </Link>
          </li>
          <li className="header__container--li">
            <Link className="link" to="/contact" onClick={closeMenuHandler}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <MobileMenuBtn active={state} event={showMenuHandler} />
    </header>
  );
};

export default Header;
