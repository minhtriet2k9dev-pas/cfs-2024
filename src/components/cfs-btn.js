import React, { Component } from "react";
import { AwesomeButton } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";

class CfsBtn extends Component {
	render() {
		return (
			<div>
				<AwesomeButton
					cssModule={AwesomeButtonStyles}
					type="primary"
					style={{
						"margin-top": "20px",
					}}
					{...this.props}
				>
					{this.props.text}
				</AwesomeButton>
			</div>
		);
	}
}

export default CfsBtn;
