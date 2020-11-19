import React from "react";
import { Link } from "react-router-dom";

export const Notifications = () => {
	return (
		<div className="container">
			<div>
				<p>Notifications</p>
			</div>
			<Link to="/main">
				<button
					type="submit"
					className="btn btn-primary"
					onClick={() => actions.setLoggedIn(true)}
					style={{ marginLeft: "30px" }}>
					Go Back
				</button>
			</Link>
		</div>
	);
};
