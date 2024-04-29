import React from "react";
import "../FormFooter/FormFooter.css";
import { Link } from "react-router-dom";

const FormFooter = ({paragrafo,linkTxt,caminho}) => {
	return (
		<p className="FormFooter">
			{paragrafo}<Link to={caminho}> {linkTxt}</Link>{" "}
		</p>
	);
};

export default FormFooter;
