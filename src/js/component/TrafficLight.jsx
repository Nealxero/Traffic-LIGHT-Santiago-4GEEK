import React, { useState } from "react";

//create your first component
const TrafficLight = () => {
	const [colorOn, setColor] = useState("red");

	return (
		<div className="container">
			<div className="hanger">.</div>

			<div className="TLBody ">
				<div
					onClick={() => setColor("red")} className={"light red " + (colorOn === "red" ? "glow1" : "")}>
				</div>
				<div
					onClick={() => setColor("yellow")} className={"light yellow " + (colorOn === "yellow" ? "glow2" : "")}></div>
				<div
					onClick={() => setColor("green")} className={"light green " + (colorOn === "green" ? "glow3" : "")}></div>
			</div>
		</div>
	);
};

export default TrafficLight;