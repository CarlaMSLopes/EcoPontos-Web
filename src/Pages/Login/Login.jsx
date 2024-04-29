import React from "react";
import SideImage from "../../Components/SideImage/SideImage";
import BackButton from "../../Components/BackButton/BackButton";
import LoginForm from "../../Components/LoginForm/LoginForm";
import "../Login/StyleLogin.css";
import { Link } from "react-router-dom";
import LoginContent from "../../Components/LoginContent/LoginContent";
const Login = () => {
	return (
		<div className="login-conteiner">
			<BackButton />
			<SideImage />
			<LoginContent/>
		</div>
	);
};

export default Login;
