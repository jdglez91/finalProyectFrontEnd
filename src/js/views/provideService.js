import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const ProvideService = () => {
	const { store, actions } = useContext(Context);
	const [providerInfo, setProviderInfo] = useState({
		name: "",
		hourlyRate: "",
		date: [],
		city: "",
		state: "",
		type: ""
	});
	console.log(providerInfo.name);
	return (
		<div className="container" style={{ display: "flex" }}>
			<div>
				<img src="https://img.icons8.com/fluent-systems-regular/144/000000/housekeeping.png" />
				<div className="form-group">
					<label For="exampleFormControlFile1">Profile Photo</label>
					<input type="file" className="form-control-file" id="exampleFormControlFile1" />
				</div>
			</div>

			<form>
				<div className="form-row">
					<div className="form-group col-md-6">
						<label For="inputEmail4">Name</label>
						<input
							type="text"
							className="form-control"
							id="inputEmail4"
							value={providerInfo.name}
							placeholder="Firts and Last Name"
							name="name"
							onChange={e => setProviderInfo({ ...providerInfo, [e.target.name]: e.target.value })}
						/>
					</div>

					<div className="form-group col-md-6">
						<label For="inputEmail4">Hourly Rate</label>
						<input
							type="text"
							className="form-control"
							id="inputEmail4"
							value={providerInfo.hourlyRate}
							name="hourlyRate"
							onChange={e => setProviderInfo({ ...providerInfo, [e.target.name]: e.target.value })}
						/>
					</div>
					<div className="form-group col-md-6">
						<label For="inputPassword4">Dates Avialable</label>
						<input
							type="text"
							className="form-control"
							id="inputPassword4"
							value={providerInfo.date}
							name="date"
							onChange={e => setProviderInfo({ ...providerInfo, [e.target.name]: e.target.value })}
						/>
					</div>
				</div>
				<div className="form-group">
					<label For="inputAddress">Type of Service</label>
					<input
						type="text"
						className="form-control"
						id="inputAddress"
						placeholder="Residential or Comercial"
						value={providerInfo.type}
						name="type"
						onChange={e => setProviderInfo({ ...providerInfo, [e.target.name]: e.target.value })}
					/>
				</div>

				<div className="form-row">
					<div className="form-group col-md-6">
						<label For="inputCity">City</label>
						<input
							type="text"
							className="form-control"
							id="inputCity"
							value={providerInfo.city}
							name="city"
							onChange={e => setProviderInfo({ ...providerInfo, [e.target.name]: e.target.value })}
						/>
					</div>
					<div className="form-group col-md-4">
						<label For="inputState">State</label>
						<select id="inputState" className="form-control">
							<option selected>Choose...</option>
							<option>...</option>
						</select>
					</div>
					<div className="form-group col-md-2">
						<label For="inputZip">Zip</label>
						<input type="text" className="form-control" id="inputZip" />
					</div>
					<div className="form-group">
						<label For="exampleFormControlTextarea1">Additional Info</label>
						<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
					</div>
				</div>
				<Link to="/main">
					<button type="submit" className="btn btn-primary" onClick={() => actions.setLoggedIn(true)}>
						Submit
					</button>
				</Link>
				<Link to="/main">
					<button
						type="submit"
						className="btn btn-primary"
						onClick={() => actions.setLoggedIn(true)}
						style={{ marginLeft: "30px" }}>
						Go Back
					</button>
				</Link>
			</form>
		</div>
	);
};
