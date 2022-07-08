import React from "react";
import "./App.css";
import { Header, Footer, Welcome, PricePage } from "./containers";
import { Cta, Card } from "./components";
import Contact from "./containers/contact/Contact";
import Studentportal from "./containers/studentportal/Studentportal";
import Testimonial from "./containers/Testimonials/Testimonial";

const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Header />
        <Welcome />
        <PricePage />
        <Testimonial />
        <Contact />
        <Studentportal />
        <Footer />
      </div>
    </div>
  );
};

export default App;
