import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const ServiceCard = props => {
	const { actions, store } = useContext(Context);
	return (
		<div
			className="card mb-3"
			style={{ maxWidth: "540px" }}
			onClick={() => {
				props.setSelect(!props.select);
			}}>
			<div className="row no-gutters">
				<div className="col-md-4">
					<img src="..." className="card-img" alt="..." />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{props.provider.name}</h5>
						<p className="card-text">Provides the following services: {props.provider.type}</p>
						<p className="card-text">
							<small className="text-muted">{props.provider.hourlyRate}</small>
						</p>
					</div>
				</div>
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
