import React from "react";
import "../Input/Input.css";

const Input = ({ nomeInput, nomeLabel, referencia }) => {
	return (
		<label>
			{nomeLabel}
			<input ref={referencia} type="text" name={nomeInput} />
		</label>
	);
};

export default Input;
