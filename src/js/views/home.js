import React, { useContext, useState } from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ValidateEmail } from "../component/validateEmail";
import { ValidatePassword } from "../component/validatePassword";
import { useHistory } from "react-router-dom";

export const Home = () => {
	const { actions, store } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();
	const handleSubmit = event => {
		console.log("handleSubmit");
		event.preventDefault();
		if (ValidateEmail(email) == true && ValidatePassword(password) == true) {
			history.push("/main");
			console.log("validEmail");
		} else {
			alert("Email or Passworld not Valid ");
		}
	};
	return (
		<div className="container" style={{ width: "fit-content" }}>
			<div className="text-center mt-5">
				<p style={{ background: "#dce0f5", width: "200px", margin: "auto", borderRadius: "100px" }}>
					<img src="https://img.icons8.com/fluent-systems-regular/144/000000/housekeeping.png" />
				</p>
				<h2>Log in</h2>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label For="exampleInputEmail1">Email address</label>
						<input
							type="text"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="123@gmail.com"
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label For="exampleInputPassword1">Password</label>
						<input
							type="password"
							className="form-control"
							id="exampleInputPassword1"
							onChange={e => setPassword(e.target.value)}
						/>
					</div>
					<button type="submit" className="btn btn-primary" onClick={() => actions.setLoggedIn(true)}>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};
