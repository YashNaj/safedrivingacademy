import React from "react";
import "./App.css";
import { Header, Footer, Welcome, PricePage } from "./containers";
import { Cta, Card,SdaSwiper } from "./components";
import Contact from "./containers/contact/Contact";
import Studentportal from "./containers/studentportal/Studentportal";
import Testimonial from "./containers/Testimonials/Testimonial";
import PriceSlide from "./containers/sliders/PriceSlide";

const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Header />
        <Welcome />
        <PriceSlide/>
        <Testimonial />        
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
