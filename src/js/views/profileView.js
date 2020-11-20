import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const ProfileView = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="jumbotron" style={{ width: "100%" }}>
			<h1 className="display-4">{store.servicesProviders[0].name}</h1>
			<p className="lead">
				This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured
				content or information.
			</p>
			<hr className="my-4" />
			<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
		</div>
	);
};
