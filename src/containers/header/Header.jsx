import "./header.css";
import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/images/sfd_logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';// <-- import styles to be used

const Menu = () => (
  <>
    <p>
      <a href="#welcome">Welcome</a>
    </p>
    <p>
      <a href="#price">Pricing</a>
    </p>
    <p>
      <a href="#contact">Contact</a>
    </p>
    <p>
      <a href="#about">About</a>
    </p>
    <p>
      <a href="#students">Students</a>
    </p>
  </>
);
const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="sda__header">
      <div className="sda__navbar-links">
        <div className="sda__navbar-links_logo">
       <img src={logo} alt="logo" />
        </div>
        <div className="toEnd">
          <div className="sda__navbar-links_container">
            <Menu />
          </div>
            <button className="welcome__signup desktop" type="submit">Sign Up!</button>
            <button className = "welcome__sign-in desktop" type="submit">Sign in</button>
            <FontAwesomeIcon icon="solid fa-cart-shopping" /> 
        </div>
        <div className="sda__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="peach"
              size={40}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="peach"
              size={40}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="sda__navbar-menu-container scale-up-center">
              <div className="sda__navbar-menu-container-links scale-up-center">
                <Menu />
              </div>
              <div className="sda__navbar-menu-container-links-sign welcome__signup">
                <button type="button">Sign Up!</button>
              </div>
              <div className="welcome__sign-in">
                <button type="button">Sign Up!</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
