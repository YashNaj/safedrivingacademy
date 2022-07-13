import React from "react";
import './testimonialcard.css'
const TestimonialCard = ({ img, name, review }) => {
  return (
    <div className="testimonial-container">
      <div className="testimonial-picture">
        <div className="profile-image" >
          <img class = "profile-image" src={img} alt = "Testimonial"/>
        </div>
      </div>
      <div className="testimonial-name"> {name}</div>
      <div className="testimonial-review">
        <p className="testimonial-review-content">{review}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
