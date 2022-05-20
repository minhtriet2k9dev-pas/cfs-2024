import React, { useEffect, useState, useRef, Component } from "react";
import CfsBtn from "./../components/cfs-btn";
import "./../App.css";

class Responsed extends Component {
	render() {
		return (
			<div>
				<div style={{ "padding-top": "20px" }}></div>
				<img
					src="tdn.jpg"
					id="tdn-img"
					style={{
						display: "block",
						margin: "0 auto",
						width: " 480px",
						height: "260px",
					}}
				></img>
				<div
					className="cfs-form"
					style={{
						"margin-top": "20px",
						"font-family": "Noto Sans",
						"font-size": "33px",
						"text-align": "center",
						width: "480px",
					}}
				>
					Cảm ơn vì đã gửi phản hồi cho chúng mình nhé
					<div style={{ "margin-top": "20px" }}></div>
					<CfsBtn text="Gửi phản hồi khác" href="/" />
				</div>
			</div>
		);
	}
}

export default Responsed;
