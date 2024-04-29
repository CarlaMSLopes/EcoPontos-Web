import React from "react";
import "../BackButton/BackButton.css";
import { Link } from "react-router-dom";

const BackButton = () => {
	return (
		<Link className="voltarLink" to="/">
			<span class="material-symbols-outlined">chevron_left</span>
		</Link>
	);
};

export default BackButton;
