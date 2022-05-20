import "./../App.css";
import React, { useEffect, useState, useRef, Component } from "react";
import Hastag from "./../components/hastag";
import Other from "./../components/other";
import CfsInput from "./../components/cfs";
import CfsBtn from "./../components/cfs-btn";
import ReactLoading from "react-loading";
import io from "socket.io-client";

const socket = io.connect("https://cfs-2024-server.herokuapp.com/");

class MainPage extends Component {
	render() {
		const submitForm = (e) => {
			e.preventDefault();
			let hastags = "";
			if (
				document.getElementById("Xin in4").getAttribute("choosen") ==
				"true"
			) {
				hastags += "Xin in4, ";
			}
			if (
				document.getElementById("Kể chuyện").getAttribute("choosen") ==
				"true"
			) {
				hastags += "Kể chuyện, ";
			}
			if (
				document
					.getElementById("Bán, pass đồ")
					.getAttribute("choosen") == "true"
			) {
				hastags += "Bán, pass đồ, ";
			}
			if (
				document.getElementById("Spam").getAttribute("choosen") ==
				"true"
			) {
				hastags += "Spam, ";
			}
			if (
				document.getElementById("Diss").getAttribute("choosen") ==
				"true"
			) {
				hastags += "Diss, ";
			}
			if (
				document.getElementById("Love").getAttribute("choosen") ==
				"true"
			) {
				hastags += "Love, ";
			}
			if (
				document.getElementById("Study").getAttribute("choosen") ==
				"true"
			) {
				hastags += "Study, ";
			}
			if (
				document.getElementById("PR, CLB").getAttribute("choosen") ==
				"true"
			) {
				hastags += "PR, CLB, ";
			}
			if (
				document
					.getElementById("Đu idol, showbiz")
					.getAttribute("choosen") == "true"
			) {
				hastags += "Đu idol, showbiz, ";
			}
			if (
				document.getElementById("Tìm card").getAttribute("choosen") ==
				"true"
			) {
				hastags += "Tìm card, ";
			}
			if (
				document.getElementById("khac").getAttribute("choosen") ==
				"true"
			) {
				hastags += document.getElementById("khac-input").value;
			}
			let error = false;
			if (hastags == "") {
				document.getElementById("hastag-msg").style.display = "block";
				error = true;
			}

			const cfs = document.getElementById("cfs").value;
			if (cfs == "") {
				document.getElementById("cfs-msg").style.display = "block";
				error = true;
			}

			const today = new Date();
			const submitDate =
				today.getDate() +
				"-" +
				(today.getMonth() + 1) +
				"-" +
				today.getFullYear();
			const submiTime =
				today.getHours() +
				":" +
				today.getMinutes() +
				":" +
				today.getSeconds();

			socket.emit("submitForm", {
				hastags: hastags,
				cfs: cfs,
				submitDate: submitDate,
				submitTime: submiTime,
			});

			if (!error) {
				document.getElementById("loading").style.display = "block";
				setTimeout(() => {
					document.getElementById("msg").textContent =
						"Checking for spammers ...";
				}, 100);
				setTimeout(() => {
					document.getElementById("loading").style.display = "none";
					window.location.href = "/Responsed";
				}, 1500);
			}
		};
		return (
			<div className="App">
				<img src="tdn.jpg" id="tdn-img"></img>
				<form
					className="cfs-form"
					style={{ "padding-bottom": "25px", "margin-top": "12px" }}
					onSubmit={submitForm}
				>
					<div className="questions">Chủ đề bạn muốn nhắc tới</div>
					<div className="frames">
						<Hastag hastag="Xin in4" />
						<Hastag hastag="Kể chuyện" />
						<Hastag hastag="Bán, pass đồ" />
						<Hastag hastag="Spam" />
						<Hastag hastag="Diss" />
						<Hastag hastag="Love" />
						<Hastag hastag="Study" />
						<Hastag hastag="PR, CLB" />
						<Hastag hastag="Đu idol, showbiz" />
						<Hastag hastag="Tìm card" />
						<Other />
						<div
							id="hastag-msg"
							style={{
								color: "#e84118",
								display: "none",
								"padding-bottom": "10px",
							}}
						>
							* Vui lòng chọn một hoặc nhiều hơn một chủ đề nhé
						</div>
					</div>
					<div className="questions">Điều mà bạn muốn nói</div>
					<div className="frames">
						<CfsInput id="cfs" />
						<div
							id="cfs-msg"
							style={{
								color: "#e84118",
								display: "none",
								"padding-bottom": "10px",
							}}
						>
							* Vui lòng đừng bỏ trống khung này nhé
						</div>
					</div>
					<CfsBtn text="Submit" />
					<div
						id="loading"
						style={{
							"margin-left": "250px",
							"margin-top": "20px",
							display: "none",
						}}
					>
						<ReactLoading
							type="spokes"
							color="#1c81ff"
							height={70}
							width={70}
						/>
					</div>
					<div
						style={{
							"text-align": "center",
							"font-family": "Noto Sans",
						}}
						id="msg"
					></div>
				</form>
				<CfsBtn
					text="Tôi là quản trị viên"
					href="/Login"
					type="secondary"
					style={{ "margin-top": "50px" }}
				/>
			</div>
		);
	}
}
export default MainPage;
