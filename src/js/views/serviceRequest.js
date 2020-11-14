import React from "react";
import { Link } from "react-router-dom";
import { Search } from "../component/search";

export const ServiceRequest = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm">Calendar</div>
				<div className="col-sm">Description</div>
				<div className="col-sm">Summit Buttom</div>
			</div>
			<Search />
		</div>
	);
};
