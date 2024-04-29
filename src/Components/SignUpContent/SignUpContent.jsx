import React from "react";
import "../SignUpContent/SignUpContent.css"
import FormTitle from "../../Components/FormTitle/FormTitle";
import SignUpForm from "../SignUpForm/SignUpForm";

const SignUpContent = () => {
	return (
		<div className="SignUpContent__container">
			<FormTitle title="Cadastre-se no Eco Pontos" />
			<SignUpForm />
		</div>
	);
};

export default SignUpContent;
