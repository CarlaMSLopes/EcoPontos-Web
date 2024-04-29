import React from "react";
import "../LoginContent/LoginContent.css";
import FormTitle from "../../Components/FormTitle/FormTitle";
import LoginForm from "../LoginForm/LoginForm";

const LoginContent = () => {
	return (
		<div className="LoginContent__container">
			<FormTitle title="Entre no Eco Pontos" />
			<LoginForm />
		</div>
	);
};

export default LoginContent;
