import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

export const ServiceCard = props => {
	const { actions, store } = useContext(Context);
	return (
		<div className="col-4">
			<div
				className="card mb-3"
				style={{ maxWidth: "540px", background: "#dce0f5" }}
				onClick={() => {
					props.setSelect(!props.select);
				}}>
				<div className="row no-gutters">
					<div className="col-md-4">
						<img src="https://img.icons8.com/bubbles/120/000000/broom.png" />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{props.provider.name}</h5>
							<p className="card-text">
								Provides the following services :{props.provider.type}
								hourlyRate $ :{props.provider.hourlyRate}
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
						style={{ marginLeft: "30px" }}>
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
