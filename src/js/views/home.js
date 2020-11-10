import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center mt-5">
		<p>
			<img src="https://img.icons8.com/material-outlined/24/000000/broom.png" />
		</p>
		<h2>Log in</h2>
		<form>
			<div className="form-group">
				<label For="exampleInputEmail1">Email address</label>
				<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
				<small id="emailHelp" className="form-text text-muted">
					{"We'll never share your email with anyone else."}
				</small>
			</div>
			<div className="form-group">
				<label For="exampleInputPassword1">Password</label>
				<input type="password" className="form-control" id="exampleInputPassword1" />
			</div>
			<div className="form-group form-check">
				<input type="checkbox" className="form-check-input" id="exampleCheck1" />
				<label className="form-check-label" For="exampleCheck1">
					Check me out
				</label>
			</div>
			<button type="submit" className="btn btn-primary">
				Submit
			</button>
		</form>
	</div>
);
