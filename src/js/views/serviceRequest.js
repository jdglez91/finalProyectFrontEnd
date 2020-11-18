import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Search } from "../component/search";
import { ServiceCard } from "../component/serviceProvider";

export const ServiceRequest = () => {
	const { store } = useContext(Context);
	const [select, setSelect] = useState(false);
	let mapServices = store.servicesProviders.map(service => {
		return (
			<ServiceCard
				className="col-sm"
				key={service.name}
				provider={service}
				setSelect={setSelect}
				select={select}
			/>
		);
	});
	return (
		<div className="container">
			<div className="row">
				{!select ? (
					<>{mapServices}</>
				) : (
					<>
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
					</>
				)}
			</div>
		</div>
	);
};
