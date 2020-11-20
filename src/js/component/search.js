import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { ServiceProvider } from "./serviceProvider";

import PropTypes from "prop-types";

export const Search = () => {
	const { actions, store } = useContext(Context);
	const [search, setSearch] = useState("");
	return (
		<div className="" style={{ width: "300px", marginBottom: "20px" }}>
			{/* <form className="form-inline my-2 my-lg-0"> */}
			<input
				className="form-control mr-sm-2"
				onChange={e => setSearch(e.target.value)}
				type="text"
				placeholder="Search"
				aria-label="Search"
			/>
			<button
				onClick={() => actions.search(search)}
				className="btn btn-outline-success my-2 my-sm-0"
				type="button">
				Search
			</button>
			{/* </form> */}
			{/* {store.servicesProviders.map((item, index) => {
				if (
					search != "" &&
					(item.name.toLowerCase().includes(search.toLowerCase()) ||
						item.date.includes(search) ||
						item.hourlyRate.includes(search))
				) {
					return <ServiceProvider key={index} provider={item} index={index} />;
				}
			})} */}
		</div>
	);
};
