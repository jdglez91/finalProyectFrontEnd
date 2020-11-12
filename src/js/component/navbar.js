import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { actions, store } = useContext(Context);
	return (
		<nav className="container" style={{ paddingBottom: "20px", paddingTop: "20px" }}>
			{/* <Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link> */}
			<div className="ml-auto" style={{ float: "right" }}>
				{store.loggedIn ? (
					<Link to="/home">
						<button className="btn btn-primary" onClick={() => actions.setLoggedIn(false)}>
							Sign out
						</button>
					</Link>
				) : (
					<Link to="/signUp">
						<button className="btn btn-primary">Sign up</button>
					</Link>
				)}
			</div>
		</nav>
	);
};
