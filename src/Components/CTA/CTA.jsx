import React from "react";
import LinkRoute from "../LinkRoute/LinkRoute";
import "../CTA/CTA.css";
const CTA = () => {
	const loginStatus = localStorage.getItem("isLogged");
	function CondicionalCTAUserLogin() {
		if (loginStatus) {
			return "";
		} else {
			return (
				<LinkRoute
					classe="buttonGreen buttonBig btn-animated"
					caminho="/SignUp"
					nome="Começar"
				/>
			);
		}
	}
	return (
		<div className="CTA_section">
			<h1>Bem vindo ao EcoPontos!</h1>
			<p>
				Junte pontos em troca de <br />
				benefícios, descontos e muito mais!
			</p>
			<div className="CTA_links">{CondicionalCTAUserLogin()}</div>
		</div>
	);
};
export default CTA;
