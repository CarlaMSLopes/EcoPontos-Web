import React from "react";
import "../Card/Card.css";
const Card = ({ icone, valor, empresa, desconto }) => {
	return (
		<div className="Card">
			<img src={icone} alt="" />
			<p className="valor">
				{valor}
				<span> Ecos</span>
			</p>
			<p className="empresa">{empresa}</p>
			<p className="desconto">{desconto}</p>
			<button className="btn-animated">Resgatar</button>
		</div>
	);
};

export default Card;
