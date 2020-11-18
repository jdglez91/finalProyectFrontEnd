import React from "react";

import { Link } from "react-router-dom";

export const SignUp = () => (
	<div className="container" style={{ display: "flex" }}>
		<form>
			<div className="form-row">
				<div className="form-group col-md-6">
					<label For="inputEmail4">Firts Name</label>
					<input type="email" className="form-control" id="inputEmail4" />
				</div>
				<div className="form-group col-md-6">
					<label For="inputEmail4">Lasts Name</label>
					<input type="email" className="form-control" id="inputEmail4" />
				</div>
				<div className="form-group col-md-6">
					<label For="inputEmail4">Email</label>
					<input type="email" className="form-control" id="inputEmail4" />
				</div>
				<div className="form-group col-md-6">
					<label For="inputPassword4">Password</label>
					<input type="password" className="form-control" id="inputPassword4" />
				</div>
			</div>
			<div className="form-group">
				<label For="inputAddress">Address</label>
				<input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
			</div>
			<div className="form-group">
				<label For="inputAddress2">Address 2</label>
				<input
					type="text"
					className="form-control"
					id="inputAddress2"
					placeholder="Apartment, studio, or floor"
				/>
			</div>
			<div className="form-row">
				<div className="form-group col-md-6">
					<label For="inputCity">City</label>
					<input type="text" className="form-control" id="inputCity" />
				</div>
				<div className="form-group col-md-4">
					<label For="inputState">State</label>
					<select id="inputState" className="form-control">
						<option selected>Choose...</option>
						<option>...</option>
					</select>
				</div>
				<div className="form-group col-md-2">
					<label For="inputZip">Zip</label>
					<input type="text" className="form-control" id="inputZip" />
				</div>
			</div>
			<div className="form-group" />
			<Link to="/">
				<button type="submit" className="btn btn-primary">
					Sign Up
				</button>
			</Link>
		</form>
		<h1 style={{ marginLeft: "50px", marginTop: "50px", color: "rgb(32 93 117)" }}>
			Welcome to Iwipe the cleaning App
			<p style={{ background: "#dce0f5", width: "170px", margin: "auto", borderRadius: "100px" }}>
				<img src="https://img.icons8.com/fluent-systems-regular/144/000000/housekeeping.png" />
			</p>
		</h1>
	</div>
);
