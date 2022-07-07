import React from "react";

const PricePage = () => {
  return (
    <div className="pricing-page">
      <div className="pricing-page-heading">
        Affordable packages to get you on the road.
      </div>
      <div className="pricing-page-price_display-container">
        <div className="pricing-page-price_display">
          <div className="price-big">
            <div className="price-card-a">
              <div className="price-heading">Basic +</div>
              <div className="price"></div>
              <div className="price-card-a-features"></div>
              <button type = 'submit' className="price-card-add-to-cart">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="price-small">
            <div className="price-card=b"></div>
            <div className="price-card=b"></div>
            <div className="price-card=b"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricePage;
