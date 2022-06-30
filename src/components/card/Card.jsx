import React from "react";
import './card.css'

const Card = ({title, description, }) => {
  return (
    <div className="pps__card">
      <div className="pps__card-title">
        <div className="pps__card-icon">
        </div>
        <h1 className = "gradient__text2">
            {title}
        </h1>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
