import React from "react";
import "../Home/StyleHome.css";
import HomePerfil from "../../Components/Section-perfil/HomePerfil";
import HeaderHome from "../../Components/HeaderHome/HeaderHome";
import Extrato from "../../Components/Extrato/Extrato";
import UltimasTransacoes from "../../Components/UltimasTransacoes/UltimasTransacoes";

const Home = () => {
	return (
		<div className="contentHomePerfil">
			<HeaderHome />
			<HomePerfil />
			<section className="contentHistorico">
				<Extrato />
				<UltimasTransacoes />
			</section>
		</div>
	);
};

export default Home;
