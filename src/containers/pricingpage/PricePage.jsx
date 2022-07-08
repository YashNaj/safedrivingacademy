import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

import React from "react";
import "./pricingpage.css";
const PricePage = () => {
  return (
    <div className="pricing-page">
      <div className="pricing-page-container">
        <div className="pricing-page-heading">
          Affordable packages to get you on the road.
        </div>
        <div className="pricing-page-price_display-container">
          <div className="pricing-page-price_display">
            <div className="price-big">
              <div className="price-card-a">
                <div className="price-card-a-container">
                  <div className="price-heading">
                    Basic &nbsp; <span className="light-green">+</span>
                  </div>
                  <div className="price">
                    $740
                    <div className="hst">+HST</div>
                  </div>
                  <div className="includes">Includes:</div>
                  <div className="price-card-a-features">
                    <ul className="price-card-a-features-list">
                      <li className="list-item-a">20 hrs in class/online</li>
                      <li className="list-item-a">10 hours home work</li>
                      <li className="list-item-a">10 hours In Car training</li>
                      <li className="list-item-a">
                        DLH ( Driver”s license History )
                      </li>
                      <li className="list-item-a">
                        Obtain from Service Ontario
                      </li>
                      <li className="list-item-a">4 month reduction</li>
                      <div className="plus-feature">
                        <span className="light-green plus-card-a-small">+</span>{" "}
                        &nbsp; A car provided for your roadtest, with a 1 hour
                        refresher before hand to ensure your success!
                      </div>
                    </ul>
                  </div>
                  <button type="submit" className="price-card-add-to-cart">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="price-small">
              <div className="price-card-b card1">
                <div className="price-card-b-container">
                  <div className="price-heading-b">Basic</div>
                  <div className="price-card-b-info-container">
                    <div className="price-b">
                      $640
                      <div className="hst">+HST</div>
                    </div>
                    <div className="price-card-b-features">
                      <ul className="price-card-b-features-list">
                        <li className="list-item-b">20 hrs in class/online</li>
                        <li className="list-item-b">10 hours home work</li>
                        <li className="list-item-b">
                          10 hours In Car training
                        </li>
                        <li className="list-item-b">
                          DLH ( Driver”s license History )
                        </li>
                        <li className="list-item-b">
                          Obtain from Service Ontario
                        </li>
                        <li className="list-item-b">4 month reduction</li>
                      </ul>
                    </div>
                    <button type="submit" className="price-card-add-to-cart-b">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="price-card-b card2">
                <div className="price-card-b-container">
                  <div className="price-heading-b">Road Test</div>
                  <div className="price-card-b-info-container">
                    <div className="price-b">
                      $140
                      <div className="hst">+HST</div>
                    </div>
                    <div className="price-card-b-features">
                      <ul className="price-card-b-features-list">
                        <li className="list-item-b">
                          1 hour lesson before test
                        </li>
                        <li className="list-item-b">Car provided</li>
                      </ul>
                    </div>
                    <button type="submit" className="price-card-add-to-cart-b">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="price-card-b card3">
                <div className="price-card-b-container">
                  <div className="price-heading-b wide-title">Single Lesson</div>
                  <div className="price-card-b-info-container">
                    <div className="price-b">
                      $55
                      <div className="hst">+HST</div>
                    </div>
                    <div className="price-card-b-features">
                      <ul className="price-card-b-features-list">
                        <li className="list-item-b">
                          1 lesson provided at your schedule
                        </li>
                      </ul>
                    </div>
                    <button type="submit" className="price-card-add-to-cart-b">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricePage;
