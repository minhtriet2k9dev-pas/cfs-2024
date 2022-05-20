import React, { Component } from "react";
import { Switch } from "pretty-checkbox-react";
import "pretty-checkbox";

class Other extends Component {
	onClick = () => {
		this.state++;
		if (this.state % 2 === 1) {
			document.getElementById("khac").style.color = "#1B1464";
			document.getElementById("khac-input").removeAttribute("disabled");
			document.getElementById("khac").setAttribute("choosen", "true");
		} else {
			document.getElementById("khac").style.color = "#3c6382";
			document.getElementById("khac-input").setAttribute("disabled", "");
			document.getElementById("khac-input").value = "";
			document.getElementById("khac").setAttribute("choosen", "false");
		}
	};

	render() {
		this.state = 0;
		return (
			<div
				style={{
					"text-align": "left",
					"margin-left": "30px",
				}}
			>
				<Switch
					style={{
						"font-family": "Noto Sans",
						"font-size": "17px",
						"padding-top": "11px",
						"padding-bottom": "11px",
						color: "#3c6382",
					}}
					onClick={this.onClick}
				>
					<span id="khac">Khác: </span>
				</Switch>
				<form
					style={{
						"padding-bottom": "11px",
					}}
				>
					<input
						style={{
							"border-radius": "8px",
							"box-shadow": "0px 0px 5px rgba(0, 0, 0, 0.5)",
							"font-family": "Noto Sans",
							"font-size": "15px",
						}}
						disabled
						type="text"
						id="khac-input"
					/>
				</form>
			</div>
		);
	}
}

export default Other;
