import React from "react";
import heroImagem from "../../Assets/HeroBanner.png";
import "../HeroImage/HeroImage.css"
const HeroImage = () => {
  return (
    <figure className="Figure_hero">
      <img src={heroImagem} alt="" />
    </figure>
  );
};

export default HeroImage;
