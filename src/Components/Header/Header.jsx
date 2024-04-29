import React from "react";
import Navbar from "../Navbar/Navbar";
import "../Header/StyleHeader.css";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className="header-landingPage">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
