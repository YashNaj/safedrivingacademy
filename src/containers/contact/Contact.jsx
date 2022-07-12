import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import contactPicture from "../../assets/images/dad.png";
import React from "react";
import "./contact.css";
const Contact = () => {
  const ContactBrick = ({ title, icon, link }) => {
    return (
      <div className="contact-section">
        <div className="contact-section-content">
          <a className = "contact-buttons" href={link} >
            <FontAwesomeIcon icon={icon} />
              {title}
          </a>
        </div>
      </div>
    );
  };
  return (
    <div className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-display-grid">
          <div className="contact-display-grid-picture-container">
            <div className="contact-display-grid-picture">
              <div className="background-image2" />
              <h1>Lets Get Started</h1>
            </div>
          </div>
          <div className="contact-display-grid__contact-container">
            <div className="contact-display-grid__contact">
              <h1 className="contact-display-grid__contact-heading">
                Contact Us!
              </h1>
              <div className="contact-block-container">
                <ContactBrick title="Instagram" icon="'fa-brands fa-instagram'" link="" />
                <ContactBrick title="Call" icon="'fa-solid fa-phone'" link="" />
                <ContactBrick title="Mail" icon="'fa-solid fa-envelope'" link="" />
              </div>
            </div>
          </div>
          <div className="contact-display-grid__student-portal-container">
            <div className="contact-display-grid__student-portal">
            <h1 className = "student-portal-heading">
              Student Portal</h1>
            <div className='portal-button-container'>
              <button type='submit' className="grid-button">
                Sign In
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
