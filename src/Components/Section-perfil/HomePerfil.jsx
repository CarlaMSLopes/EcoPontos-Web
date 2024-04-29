import React from "react";
import girlAndBoy from "../../Assets/imgHeroPerfil.png";
import "../Section-perfil/HomePerfil.css";

const HomePerfil = () => {
	const nomeUser = localStorage.getItem("name");
	return (
		<section className="contentInfoPerfil">
			<div className="contentWelcomeLinks">
				<h1>
					Bem vindo <br /> {nomeUser}!
				</h1>
				<div>
					<a href="">Seus dados pessoais</a>
					<a href="">Pedidos</a>
					<a href="">Extratos</a>
				</div>
			</div>
			<div className="pontuacaoPerfil">
				<h2>Você possui</h2>
				<span id="spanPontos">
					320 <span>ecos</span>
				</span>
				<a href="">mais detalhes</a>
			</div>
			<img className="imgSideBoyGirl" src={girlAndBoy} alt="" />
		</section>
	);
};

export default HomePerfil;
