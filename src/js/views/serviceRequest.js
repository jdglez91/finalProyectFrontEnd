import React from "react";
import { Link } from "react-router-dom";
import { Search } from "../component/search";

export const ServiceRequest = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm">Calendar</div>
				<div className="col-sm">
					<div className="form-group">
						<label For="exampleFormControlTextarea1">Description</label>
						<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
					</div>
				</div>
				<div className="col-sm">
					<Link to="/main">
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</Link>
				</div>
			</div>
			<Search />
		</div>
	);
};
