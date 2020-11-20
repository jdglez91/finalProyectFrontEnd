import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import PropTypes, { bool } from "prop-types";

export const ServiceCard = props => {
	const { actions, store } = useContext(Context);
	return (
		<div className="col-4">
			<div
				className="card mb-3"
				style={{ maxWidth: "540px", background: "#dce0f5", borderRadius: "40px", fontFamily: "monospace" }}
				onClick={() => {
					props.setSelect(!props.select);
				}}>
				<div className="row no-gutters">
					<div className="col-md-4">
						<img src="https://img.icons8.com/bubbles/120/000000/broom.png" />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h3 className="card-title">{props.provider.name}</h3>
							<p className="card-text">
								<strong>Provides the following services : </strong>
								{props.provider.type}
								<p></p>
								<strong>hourlyRate :$ </strong>
								{props.provider.hourlyRate}
								<p></p>
								<strong>City : </strong>
								{props.provider.city}
								<p></p>
								<strong>State : </strong>
								{props.provider.state}
							</p>
							<p className="card-text">
								<small className="text-muted">{props.provider.hourlyRate}</small>
							</p>
						</div>
					</div>
				</div>
				<Link to="/profileView">
					<button
						type="submit"
						className="btn btn-primary"
						onClick={() => actions.setLoggedIn(true)}
						style={{ marginLeft: "30px", marginBottom: "20px" }}>
						Select
					</button>
				</Link>
			</div>
		</div>
	);
};

ServiceCard.propTypes = {
	provider: PropTypes.object,
	index: PropTypes.number,
	setSelect: PropTypes.func,
	select: PropTypes.bool
};
