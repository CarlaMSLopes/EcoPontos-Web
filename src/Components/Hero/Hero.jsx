import React from "react";
import CTA from '../CTA/CTA.jsx';
import HeroImage from '../HeroImage/HeroImage.jsx';
import "./Hero.css";

const Hero = () => {
  return (
    <main className="HeroSection">
      <CTA />
      <HeroImage />
    </main>
  );
};

export default Hero;
