import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const ProfileView = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="jumbotron" style={{ width: "100%", fontFamily: "monospace", borderRadius: "150px" }}>
			<div>
				<img src="https://img.icons8.com/bubbles/200/000000/broom.png" />
			</div>
			<div>
				<h1 className="display-4">{store.servicesProviders[0].name}</h1>
			</div>
			<h4 className="lead">About Me</h4>
			<p>
				I am currently working as a Project manager for a Residential construction company, Lennar homes and
				also work for a remodeling company that focus on hotel chains like Holidays Inn etc.. I love writing and
				in 2010 I publish a childrens books called My Family, also loved fishing playing video games and
				cooking. I always was intrigued by app development and I wanted to learn how to program in order to
				express my ideas.
			</p>
			<div className="row justify-content-around">
				<div className="col-2">
					<h5>Hourly Rate</h5>
					<p>$20</p>
				</div>
				<div className="col-2">
					<h5>Type of Service</h5>
					<p>Residential</p>
				</div>
				<div className="col-2">
					<h5>City</h5>
					<p>Cuba</p>
				</div>
				<div className="col-2">
					<h5>State</h5>
					<p>Havana</p>
				</div>
			</div>

			<Link to="/serviceRequest">
				<button
					type="submit"
					className="btn btn-primary"
					onClick={() => actions.setLoggedIn(true)}
					style={{ marginLeft: "30px" }}>
					Go Back
				</button>
			</Link>
			<Link to="/main">
				<button
					type="submit"
					className="btn btn-primary"
					onClick={() => actions.setLoggedIn(true)}
					style={{ marginLeft: "30px" }}>
					Summit
				</button>
			</Link>
		</div>
	);
};
