import "./header.css";
import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/images/sfd_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

const Header = () => {
  var f = document.getElementById('sign-container');
  function exitOut() {
    setToggleMenu(false);
    f.style.transform = 'translateY(' + -40 + 'px)';
  }
  const [toggleMenu, setToggleMenu] = useState(false);
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
          <div className="welcome-header-buttons">
            <button className="welcome__signup desktop" type="submit">
              Sign Up!
            </button>
            <button className="welcome__sign-in desktop" type="submit">
              Sign in
            </button>
          </div>
          <FontAwesomeIcon icon="solid fa-cart-shopping" />
        </div>

        <div className="sda__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="peach"
              size={40}
              onClick={() => exitOut()}
            />
          ) : (
            <RiMenu3Line
                color="peach"
                size={40}
                onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="sda__navbar-menu-container slide-in-right animate">
              <div className="sda__navbar-menu-container-links slide-in-right animate">
                <Menu />
              </div>
              <div className="sda__navbar-menu-sign-container" id = "sign-container">
                <div className="sda__navbar-menu-container-links-sign header__signup" id = "sign-container2">
                  <button className="signup_button-mobile" type="button">
                    Sign Up!
                  </button>
                </div>
                <button className="signin_button-mobile" type="button">
                  Sign In
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
