import { useEffect, useState, useRef } from "react";
import { api } from "../../api";
import SubtmitBtn from "../SubmitBtn/SubtmitBtn";
import Checkbox from "../CheckBox/CheckBox";
import FormFooter from "../FormFooter/FormFooter";
import "../SignUpForm/SignUpForm.css";

export default function SignUpForm() {
	const nameRef = useRef(null);
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	async function handleSubmit(event) {
		event.preventDefault();

		const response = await api
			.post("/createUser", {
				name: nameRef.current?.value,
				email: emailRef.current?.value,
				password: passwordRef.current?.value,
			})
			.then((response) => contaCriada())
			.catch((err) => console.log(err));
	}

	function contaCriada() {
		window.alert("Conta Criada");
		window.location.href = "/Login";
	}
	return (
		<form className="form" onSubmit={handleSubmit}>
			<label>Nome</label>
			<input ref={nameRef} />
			<label>Email</label>
			<input ref={emailRef} />
			<label>Senha</label>
			<input ref={passwordRef} />
			<div className="submit_secion">
				<Checkbox
					classe={"CheckBox_Cadastro"}
					label="Concordo com os Termos de Serviço , a Política de Privacidade e as Configurações de Notificação padrão do EcoPontos."
				/>
				<SubtmitBtn valueSubmit={"Cadastrar"} />
				<FormFooter
					paragrafo="Ja tem uma conta?"
					linkTxt="Entrar"
					caminho="/Login"
				/>
			</div>
		</form>
	);
}
