import React, { useEffect, useState, useRef, Component } from "react";
import * as ReactDOMServer from "react-dom/server";
import ReactLoading from "react-loading";

import "./../App.css";
import {
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
} from "@material-ui/core/";
import io from "socket.io-client";

const socket = io.connect("https://cfs-2024-server.herokuapp.com/");

class Admin extends Component {
	constructor(props) {
		super(props);
		rm;
		this.data = [];
	}

	render() {
		function setCookie(cname, cvalue, exdays) {
			const d = new Date();
			d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
			let expires = "expires=" + d.toUTCString();
			document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
		}

		function getCookie(cname) {
			let name = cname + "=";
			let decodedCookie = decodeURIComponent(document.cookie);
			let ca = decodedCookie.split(";");
			for (let i = 0; i < ca.length; i++) {
				let c = ca[i];
				while (c.charAt(0) == " ") {
					c = c.substring(1);
				}
				if (c.indexOf(name) == 0) {
					return c.substring(name.length, c.length);
				}
			}
			return "";
		}

		if (getCookie("admin") === "") {
			const key = new URLSearchParams(window.location.search).get("key");
			socket.emit("check-admin", key);
			socket.on("admin-result", (data) => {
				if (!data) {
					window.location.href = "/Login";
				} else {
					setCookie("admin", key, 7);
					window.location.href = "/Admin";
				}
			});
		} else {
			const key = getCookie("admin");
			socket.emit("check-admin", key);
			socket.on("admin-result", (data) => {
				if (!data) {
					window.location.href = "/Login";
				} else {
					const key = new URLSearchParams(window.location.search).get(
						"key"
					);
					if (key !== null) {
						window.location.href = "/Admin";
					}
				}
			});
		}

		document.getElementById("root").beforeunload = function () {
			socket.close();
		};

		socket.emit("show-cfs", "");
		socket.on("cfs", (cfs) => {
			socket.off("cfs");
			this.data = cfs.split("\n");
			this.data.pop();
			console.log(this.data);
			let data = this.data.map((content) => (
				<TableRow>
					<TableCell align="center">
						{JSON.parse(content).submitDate}
					</TableCell>
					<TableCell align="center">
						{JSON.parse(content).submitTime}
					</TableCell>
					<TableCell align="center">
						{JSON.parse(content).hastags}
					</TableCell>
					<TableCell align="center">
						{JSON.parse(content).cfs}
					</TableCell>
				</TableRow>
			));
			document.getElementById("loading").style.display = "none";
			document.getElementById("cfs").innerHTML =
				ReactDOMServer.renderToString(data);
		});

		return (
			<div>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell align="center">Ngày nộp</TableCell>
							<TableCell align="center">Thời gian nộp</TableCell>
							<TableCell align="center">Chủ đề</TableCell>
							<TableCell align="center">Nội dung</TableCell>
						</TableRow>
					</TableHead>
					<TableBody id="cfs"></TableBody>
				</Table>
				<div
					id="loading"
					style={{
						"align-items": "center",
						"justify-content": "center",
						"text-align": "center",
						margin: "0 auto",
						display: "flex",
						"margin-top": "30px",
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
					id="loading"
					style={{
						"align-items": "center",
						"justify-content": "center",
						"text-align": "center",
						margin: "0 auto",
						display: "flex",
					}}
				></div>
			</div>
		);
	}
}

export default Admin;
