import React from "react";
import "./card.css";
const Card = ({ title, price, features }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-header">
          <h1>{title}</h1>
        </div>
        <div className="price">
          <h1 className="card-price">{price}</h1>
          <div className="hst">+HST</div>
        </div>
        <div className="features-list">
        <h1 className="features-heading">Includes</h1>

          <ul className="features-list-list">
            {features}
          </ul>
        </div>
        <div className="add-to-cart-card;">
          <button type="submit" className="btn-add-to-cart">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
