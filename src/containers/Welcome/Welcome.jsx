import "./welcome.css";
import React from "react";
import logo from "../../assets/images/sfd_logo.png";
import cityScape from "../../assets/images/header background.png";
import Header from "../header/Header";
const Welcome = () => {
  return (
    <div className="sda__welcome">
      <div className="welcome__section ">
        <div className="welcome__header">
          <h1 className="welcome__heading">
            Never Settle when it comes to safety.
          </h1>
          <p className="welcome__subtext">
            lorem Ipsum is just one of the most important words. Lorem Ipsum has
            been around for lorem Ipsum to be considered one of the most
            important words. Lorem Ipsum has been around for lpre Ipsum to be
            considered one of the most important words. Lorem Ipsum has been
            around for Lore
          </p>
          <buttom type="submit" className="welcome__signup">
            Sign Up!
          </buttom>
        </div>
        <div className="welcome__img">
          <div className="background-image" />
          <div className="img-container">
            <img alt="logo" src={logo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
