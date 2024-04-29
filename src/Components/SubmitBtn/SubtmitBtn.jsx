import React from "react";
import "../SubmitBtn/SubmitBtn.css";

const SubtmitBtn = ({ valueSubmit }) => {
	return <input className="btnSub" type="submit" value={valueSubmit} />;
};

export default SubtmitBtn;
