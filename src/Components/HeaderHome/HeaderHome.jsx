import React from "react";
import "../HeaderHome/HeaderHome.css";
import Icons from "../Icons/Icons";
import Logo from "../Logo/Logo";

const HeaderHome = () => {
	const nomeUser = localStorage.getItem("name");
	function Logout () {
		localStorage.clear();
		window.location.href = "/";
	}
	return (
		<header className="headerPerfil">
			<Logo />
			<div className="perfil">
				<Icons caminhoImg="person" />
				<div className="perfilMenu">
					<h1>Olá, {nomeUser}</h1>
					<h2>520 pts</h2>
				</div>
				<button className="btnsair" onClick={Logout}>
				<Icons caminhoImg="logout" />
				</button>
			</div>
		</header>
	);
};

export default HeaderHome;
