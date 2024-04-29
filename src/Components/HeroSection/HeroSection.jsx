import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero.jsx";
import HeaderHome from "../HeaderHome/HeaderHome.jsx";
const HeroSection = () => {
	const loginStatus = localStorage.getItem("isLogged");
	function CondicionalHeaderUserLogin() {
		if (loginStatus) {
			return <HeaderHome />;
		} else {
			return <Header />;
		}
	}
	return (
		<div>
			{CondicionalHeaderUserLogin()}
			<Hero />
		</div>
	);
};

export default HeroSection;
