import React, { Component } from "react";
import { Switch } from "pretty-checkbox-react";
import "pretty-checkbox";

class Hastag extends Component {
	onClick = () => {
		this.state++;
		if (this.state % 2 === 1) {
			document.getElementById(this.props.hastag).style.color = "#1B1464";
			document
				.getElementById(this.props.hastag)
				.setAttribute("choosen", "true");
		} else {
			document.getElementById(this.props.hastag).style.color = "#3c6382";
			document
				.getElementById(this.props.hastag)
				.setAttribute("choosen", "false");
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
					<span id={this.props.hastag} choosen="fasle">
						{this.props.hastag}
					</span>
				</Switch>
			</div>
		);
	}
}

export default Hastag;
