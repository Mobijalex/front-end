import React from "react";
import Companies from "../components/Companies/Companies";
import Contact from "../components/Contact/Contact";

import GetStarted from "../components/GetStarted/GetStarted";

import Hero from "../components/HeroSection/Hero";
import Residencies from "../components/Residencies/Residencies";
import Value from "../components/Value/Value";

const Pages = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />

        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
    </div>
  );
};

export default Pages;
