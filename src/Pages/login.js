import React, { useEffect, useState, useRef, Component } from "react";
import CfsBtn from "./../components/cfs-btn";
import "./../login.css";
import "./../App.css";
import TextField from "@material-ui/core/TextField";
import io from "socket.io-client";

const socket = io.connect("https://cfs-2024-server.herokuapp.com/");

class Login extends Component {
	render() {
		const onSubmit = (e) => {
			e.preventDefault();
			socket.emit("login", document.getElementById("pass").value);
			socket.on("loginResult", (data) => {
				if (data.res) {
					socket.on("admin-link", data.link);
					window.location.href = "/Admin?key=" + data.link;
				} else {
					document.getElementById("wrong").style.display = "block";
				}
			});
		};

		const onChange = () => {
			document.getElementById("wrong").style.display = "none";
		};

		return (
			<div className="login">
				<form className="login-form" onSubmit={onSubmit}>
					<TextField
						required
						label="Password"
						variant="outlined"
						type="Password"
						className="password-input"
						id="pass"
						onChange={onChange}
					/>
					<div
						id="wrong"
						style={{
							"font-size": "15px",
							color: "#e84118",
							display: "none",
							"margin-top": "45px",
							position: "absolute",
							"padding-left": "110px",
							"padding-top": "3px",
						}}
					>
						* Mật khẩu sai! Vui lòng nhập lại
					</div>
					<CfsBtn text="Login" style={{ "margin-top": "75px" }} />
				</form>
			</div>
		);
	}
}

export default Login;
