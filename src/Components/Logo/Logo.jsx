import React from "react";
import logoImage from "../../Assets/Logo.png";
import "../Logo/StyleLogo.css";
import { Link } from "react-router-dom";

const Logo = () => {
	return (
		<div className="logo">
			<Link to="/">
				{" "}
				<img className="imagem_logo" src={logoImage} alt="Logo marca" />
			</Link>
		</div>
	);
};

export default Logo;
