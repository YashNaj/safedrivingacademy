import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import SdaSwiper from "../../components/swiper/Swiper";
import React from "react";
import "./pricingpage.css";
import { Reviews } from "../../components";
const PricePage = () => {
  return (
    <div className="pricing-page ">
      <Reviews />
    </div>
  );
};

export default PricePage;
