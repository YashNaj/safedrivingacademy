import React from "react";
import { Reviews } from "../../components";
import "./testimonial.css";
const Testimonial = () => {
  return (
    <div className="testimonial " id="testimonial">
      <div className="testimonial-heading">
        Hear what our customers have to say!
      </div>
      <div className='review-slide-container'>
      <Reviews/>  
      </div>
    </div>
  );
};

export default Testimonial;
