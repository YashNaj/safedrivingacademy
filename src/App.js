import React from "react";
import "./App.css";
import { Header, Footer, Welcome, PricePage, About } from "./containers";
import { Cta, Card } from "./components";
import Contact from "./containers/contact/Contact";
import Studentportal from "./containers/studentportal/Studentportal";

const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Header />
        <Welcome />
        <About />
        <PricePage />
        <Contact />
        <Studentportal/>
        <Footer />
      </div>
    </div>
  );
};

export default App;
