import * as React from "react";
import "../CheckBox/CheckBox.css";
const Checkbox = ({ label, value, onChange, classe }) => {
	return (
		<label className={classe}>
			<input type="checkbox" checked={value} onChange={onChange} />
			{label}
		</label>
	);
};

export default Checkbox;
