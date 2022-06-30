import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";
import "./contact.css";
const Contact = () => {
  const ContactSection = ({ title, icon, link }) => {
    return (
      <div className="contact-section">
        <div className="contact-section-content">
          <FontAwesomeIcon className="contact-icon" icon={icon} />
          <div className="contact-title"> {title}</div>
          <div className="contact-link">{link}</div>
        </div>
      </div>
    );
  };
  return (
    <div className="contact" id = 'contact'>
      <div className="contact-container">
        <div className="contact-card">
          <h1 className="contact-card-heading">Contact Us!</h1>
          <div className="contact-card-display">
            <ContactSection
              className="contact-block"
            icon= {solid("envelope")}
              title="Email"
              link={<a href="Link URL">sda@business.com</a>}
            />
            <ContactSection
              className="contact-block"
              icon={solid("phone")}
              title="Call"
              link={<a href="Link URL">+1 999 999 9999</a>}
            />
            <ContactSection
              className="contact-block"
              icon={brands("instagram")}
              title="Social"
              link={<a href="Link URL">instagram.com</a>}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
