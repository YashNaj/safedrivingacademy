import React from "react";
import { Card } from "../../components";
import "./pricingpage.css";
const PricePage = () => {
  return (
    <div className="sda__price" id="price">
      <h1 className="sda__price-header">
        Affordable Packages to get you on the road
      </h1>
      <div className="sda__price-container ">
        <div className="price-grid-a">
          <div className="package1 packageStyle">
            <div className="package-info-container">
              <div className="name">
                <h1>
                  Basic <span className="plus">+</span>
                </h1>
              </div>
              <div className="price">
                <h1>$740</h1>
                <h6>+ (HST) </h6>
              </div>
              <div className="package-description">
                <div className="package-features-a">
                  <h1 className="package-description-heading">
                    Includes everything in Basic  &nbsp;
                    <span className="plus">plus</span>:
                  </h1>
                  <ul>
                    <li>A vehicle provided for your road test</li>
                    <li>A 1 hour practice session before road test </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="price-grid-b">
          <div className="package2 packageStyle">
            <div className="package-info-container-b">
            <div className="name-b">
                <h1>
                  Basic 
                </h1>
              </div>
              <div className="price-b">
                <h1>$640</h1>
                <h6>+ (HST) </h6>
              </div>
              <div className="package-description-b">
                <div className="package-features-b">
                  <h1 className="package-description-heading-b">
                    Includes
                  </h1>
                  <ul>
                    <li>20 hours course work</li>
                    <li>10 hours takehome course work</li>
                    <li>10 hours in car training</li>
                    <li>DLH from Ontario</li>
                    <li>4 month reduction</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="package3 packageStyle">
            <div className="package-info-container-b">
            <div className="name-b">
            <h1>Road Test</h1>
              </div>
              <div className="price-b">
                <h1>$140</h1>
                <h6>+ (HST) </h6>
              </div>
              <div className="package-description-b">
                <div className="package-features-b">
                  <h1 className="package-description-heading-b">
                    Includes
                  </h1>
                  <ul>
                    <li>A vehicle provided for your road test</li>
                    <li>A 1 hour practice session before road test </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="package4 packageStyle">
            <div className="package-info-container-b">
            <div className="name-b">
            <h1>By Lesson</h1>
              </div>
              <div className="price-b">
                <h1>$55</h1>
                <h6>+ (HST) </h6>
              </div>
              <div className="package-description-b">
                <div className="package-features-b">
                  <h1 className="package-description-heading-b">
                    Includes
                  </h1>
                  <ul>
                    <li>A single lesson</li>
                  </ul>
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
