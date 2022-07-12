import "./welcome.css";
import React from "react";
import logo from "../../assets/images/sfd_logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';// <-- import styles to be used

const Welcome = () => {
  return (
    <div className="sda__welcome">
        <div className= "background-image"></div>
      <div className="welcome__section ">
        <div className="welcome__header">
          <h1 className="welcome__heading">
            Never Settle when it comes to safety.
          </h1>
          <p className="welcome__subtext">
            Personalized drivers lessons for all ages. Serving the greater London, ON area and beyond, put your trust
            in Safe Driving Acadmey to guide you through the process of getting licensed!
          </p>
          <div className="welcome-buttons">
            <button type="submit" className="welcome__signup">
              Sign Up!
            </button>
            <button type="submit" className="welcome__sign-in">
              Sign In
            </button>
          </div>
        </div>
        <div className="welcome__img">
          <div className="welcome__img">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
