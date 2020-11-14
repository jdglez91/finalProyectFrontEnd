import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Search = props => {
	const { actions, store } = useContext(Context);
	return (
		<div ClassName="container-fluid">
			<div className="card mb-3" style="max-width: 540px;">
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
		</div>
	);
};

Search.propTypes = {
	provider: PropTypes.object,
	index: PropTypes.number
};
