import React from "react";
import "../LandingPage/StyleLandingPage.css";
import HeroSection from "../../Components/HeroSection/HeroSection";
import SectionPrimary from "../../Components/Section-primary/SectionPrimary";
import SectionSecondary from "../../Components/Section-Secondary/SectionSecondary";
import Footer from "../../Components/Footer/Footer";
const LandingPage = () => {
	return (
		<div className="LandingPage">
			<HeroSection />
			<SectionPrimary />
			<SectionSecondary />
			<Footer />
		</div>
	);
};

export default LandingPage;
