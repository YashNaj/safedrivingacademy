import "./header.css";
import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/images/sfd_logo.png";
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
          <div className="sda__navbar-sign">
            <button type="button">Sign Up!</button>
          </div>
        </div>
        <div className="sda__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="brown"
              size={40}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="brown"
              size={40}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="sda__navbar-menu-container scale-up-center">
              <div className="sda__navbar-menu-container-links scale-up-center">
                <Menu />
              </div>
              <div className="sda__navbar-menu-container-links-sign">
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
