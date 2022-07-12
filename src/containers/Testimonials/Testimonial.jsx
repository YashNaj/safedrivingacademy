import React from "react";
import "./testimonial.css";
const Testimonial = () => {
  return (
    <div className="testimonial " id="testimonial">
      <div className="testimonial-page-container">
        <h1 className="testimonial-title">See what our customes are saying</h1>
        <div className="testimonial-display">
          <div className="testimonial-container">
            <div className="testimonial-picture-1">
              <div className="profile-image"></div>
            </div>
            <div className="testimonial-name-1"> John Doe</div>
            <div className="testimonial-review-1">
              <p className="testimonial-review-content">
                "lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit
                amet, consectetur lorem ipsum dolor sit amet, consectetur"
              </p>
            </div>
          </div>
          <div claaName="testimonial-container">
            <div className="testimonial-picture-2">
              <div className="profile-image"></div>
            </div>
            <div className="testimonial-name-2">Jay Versace</div>
            <div className="testimonial-review-2">
              <p className="testimonial-review-content">
                "lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit
                amet, consectetur lorem ipsum dolor sit amet, consectetur"
              </p>
            </div>
          </div>
          <div className="testimonial-container">
            <div className="testimonial-picture-3">
              <div className="profile-image"></div>
            </div>
            <div className="testimonial-name-3">Dom Kennedy</div>
            <div className="testimonial-review-3">
              <p className="testimonial-review-content">
                "lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit
                amet, consectetur lorem ipsum dolor sit amet, consectetur"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
