import React, { Component } from "react";
import TextareaAutosize from "react-autosize-textarea";
// import TextField from "@material-ui/core/TextField";

class CfsInput extends Component {
	render() {
		return (
			<TextareaAutosize
				style={{
					"border-radius": "8px",
					"box-shadow": "0px 0px 25px rgba(0, 0, 0, 0.4)",
					"font-family": "Noto Sans",
					"margin-top": "22px",
					"margin-bottom": "22px",
					width: "480px",
				}}
				id={this.props.id}
				maxLength="3000"
				placeholder="Nhập điều bạn muốn nói vào đây nhé"
			/>
		);
	}
}

export default CfsInput;
