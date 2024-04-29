import React from "react";
import plant_image1 from "../../Assets/plantcoin.png";
import "../SideImage/SideImage.css";

const SideImage = () => {
  return (
    <img className="sideImage" src={plant_image1} alt="Planta com moedas" />
  );
};

export default SideImage;
