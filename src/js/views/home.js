import React, { useContext } from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
	const { actions, store } = useContext(Context);
	return (
		<div className="container">
			<div className="text-center mt-5">
				<p style={{ background: "#dce0f5", width: "200px", margin: "auto", borderRadius: "100px" }}>
					<img src="https://img.icons8.com/fluent-systems-regular/144/000000/housekeeping.png" />
				</p>
				<h2>Log in</h2>

				<div className="form-group">
					<label For="exampleInputEmail1">Email address</label>
					<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
				</div>
				<div className="form-group">
					<label For="exampleInputPassword1">Password</label>
					<input type="password" className="form-control" id="exampleInputPassword1" />
				</div>
				<Link to="/main">
					<button type="submit" className="btn btn-primary" onClick={() => actions.setLoggedIn(true)}>
						Submit
					</button>
				</Link>
			</div>
		</div>
	);
};
