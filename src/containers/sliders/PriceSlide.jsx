import React from "react";
import SdaSwiper from "../../components/swiper/Swiper";
import "./priceslide.css";
const PriceSlide = () => {
  return (
    <div className="price-slide">
      <h1 className="price-slide-heading">
        Affordable plans to get you on the road.
      </h1>
      <div className="price-carousel">
        <SdaSwiper />
      </div>
    </div>
  );
};

export default PriceSlide;
