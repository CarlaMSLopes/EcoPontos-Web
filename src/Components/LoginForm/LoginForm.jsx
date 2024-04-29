import { useEffect, useState, useRef } from "react";
import { api } from "../../api";
import SubtmitBtn from "../SubmitBtn/SubtmitBtn";
import { user } from "../usuario";
import "../LoginForm/LoginForm.css";
import Checkbox from "../CheckBox/CheckBox";
import FormFooter from "../FormFooter/FormFooter";
import Input from "../Input/Input";
export default function LoginForm() {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	async function handleLogin(event) {
		event.preventDefault();

		const response = await api
			.get("/user", {
				params: {
					email: emailRef.current?.value,
					password: passwordRef.current?.value,
				},
			})
			.then((response) => LoginSucesso(response.data.name))
			.catch((err) => window.alert("Usuario incorreto"));
	}

	function LoginSucesso(res) {
		localStorage.setItem("name", res);
		localStorage.setItem("isLogged", true);
		console.log(user);
		window.location.href = "/Home";
	}
	return (
		<form className="form" onSubmit={handleLogin}>
			<label>Email</label>
			<input ref={emailRef} />

			<label>Senha</label>
			<input ref={passwordRef} />
			<div className="submit_secion">
				<Checkbox classe={"CheckBox_Login"} label="Lembrar-se de mim" />

				<SubtmitBtn valueSubmit={"Entrar"} />

				<FormFooter
					paragrafo="Não tem uma conta?"
					linkTxt="Cadastrar"
					caminho="/SignUp"
				/>
			</div>
		</form>
	);
}
