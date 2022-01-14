import React from "react";
import Logo from "../../assets/nasa-logo.jpeg";
import "./_header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__brand">
        <img className="logo" src={Logo} alt="nasa logo" />
        <h1 className="header__title">The Universe</h1>
      </div>
      <div className="header__nav">
        <ul className="header__nav-list">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
