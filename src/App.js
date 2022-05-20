import "./App.css";
// Pages
import MainPage from "./Pages/mainPage";
import Responsed from "./Pages/responsed";
import Login from "./Pages/login";
import Admin from "./Pages/admin";
import React, { useEffect, useState, useRef } from "react";
import {
	Route,
	Link,
	Routes,
	BrowserRouter,
	Redirect,
	Switch,
} from "react-router-dom";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/Responsed" element={<Responsed />} />
				<Route path="/Login" element={<Login />} />
				<Route path="/Admin" element={<Admin />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
