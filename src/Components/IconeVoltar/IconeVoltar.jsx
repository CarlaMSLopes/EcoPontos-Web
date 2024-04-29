import React from "react";
import { Link } from "react-router-dom";
import "../IconeVoltar/IconeVoltar.css";
const IconeVoltar = () => {
	return (
		<div>
			<Link className="voltarLink" to="/">
				<span class="material-symbols-outlined">chevron_left</span>
			</Link>
		</div>
	);
};

export default IconeVoltar;
