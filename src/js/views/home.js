import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<div className="container">
		<div className="text-center mt-5">
			<p style={{ background: "#dce0f5", width: "200px", margin: "auto", borderRadius: "100px" }}>
				<img src="https://img.icons8.com/fluent-systems-regular/144/000000/housekeeping.png" />
			</p>
			<h2>Log in</h2>
			<form style={{ width: "400px", margin: "auto" }}>
				<div className="form-group">
					<label For="exampleInputEmail1">Email address</label>
					<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
				</div>
				<div className="form-group">
					<label For="exampleInputPassword1">Password</label>
					<input type="password" className="form-control" id="exampleInputPassword1" />
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	</div>
);
