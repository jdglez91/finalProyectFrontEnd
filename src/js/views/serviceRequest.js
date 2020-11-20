import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Search } from "../component/search";
import { ServiceCard } from "../component/serviceProvider";
import { ProfileCard } from "../component/profileCard";
import { ProfileView } from "./profileView";

export const ServiceRequest = () => {
	const { store, actions } = useContext(Context);
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
			<Search />
			<div className="row">
				{!select ? (
					store.searchResult.length > 0 ? (
						store.searchResult.map(service => {
							return (
								<ServiceCard
									className="col-sm"
									key={service.name}
									provider={service}
									setSelect={setSelect}
									select={select}
								/>
							);
						})
					) : (
						<>{mapServices}</>
					)
				) : (
					<>
						<div className="my-3">
							<div className="form-group">
								<ProfileView />
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
		</div>
	);
};
