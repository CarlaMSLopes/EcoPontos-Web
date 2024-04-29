import React from "react";
import SideImage from "../../Components/SideImage/SideImage";
import BackButton from "../../Components/BackButton/BackButton";
import "../SignUp/StyleSignUp.css";
import SignUpContent from "../../Components/SignUpContent/SignUpContent";

const SignUp = () => {
	return (
		<div className="signUp-conteiner">
			<BackButton />
			<SideImage />
			<SignUpContent />
		</div>
	);
};

export default SignUp;
