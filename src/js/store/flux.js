const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			loggedIn: false,
			servicesProviders: [
				{
					name: "Jose Gonzalez",
					hourlyRate: "20",
					date: ["111320", "112020", "120120"],
					city: "Miami",
					state: "FL",
					type: "residential"
				},
				{
					name: "Maryann Lopez",
					hourlyRate: "21",
					date: ["111620", "111720", "111820"],
					city: "Miami",
					state: "FL",
					type: "residential"
				},
				{
					name: "Mila Fortich",
					hourlyRate: "18",
					date: ["112520", "111720", "111820"],
					city: "Miami",
					state: "FL",
					type: "residential"
				}
			]
		},
		actions: {
			setLoggedIn: bool => {
				setStore({ loggedIn: bool });
			}, // Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
