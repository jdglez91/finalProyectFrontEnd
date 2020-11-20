import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { SignUp } from "./component/signUp";
import { Main } from "./views/main";
import { ServiceRequest } from "./views/serviceRequest";
import { ProvideService } from "./views/provideService";
import { Notifications } from "./views/notifications";
import { ProfileView } from "./views/profileView";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="container" style={{ background: "#bbe6da" }}>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/home">
							<Home />
						</Route>

						<Route exact path="/provideService">
							<ProvideService />
						</Route>
						<Route exact path="/profileView">
							<ProfileView />
						</Route>
						<Route exact path="/notifications">
							<Notifications />
						</Route>
						<Route exact path="/serviceRequest">
							<ServiceRequest />
						</Route>
						<Route exact path="/signUp">
							<SignUp />
						</Route>
						<Route exact path="/main">
							<Main />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
