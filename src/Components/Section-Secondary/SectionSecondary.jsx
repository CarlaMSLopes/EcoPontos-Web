import React from "react";
import Carroussel from "../Caroussel/carroussel";
import '../Section-Secondary/styleSecondary.css';
const SectionSecondary = () => {
	return (
		<div className="section__secondary fadeInSection">
			<h1>Juntou Ecos? agora é so trocar por cupons de descontos</h1>

			<Carroussel />
		</div>
	);
};

export default SectionSecondary;
