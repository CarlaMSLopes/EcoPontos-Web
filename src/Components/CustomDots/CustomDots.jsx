import * as React from "react";
import "../CustomDots/Customdots.css"

const CustomDot = ({ onClick, active, index, carouselState }) => {
	const { currentSlide } = carouselState;
	return (
		<li>
			<button className="dot"
				style={{ background: active ? "#87a922" : "initial" }}
				onClick={() => onClick()}
			/>
		</li>
	);
};

export default CustomDot;
