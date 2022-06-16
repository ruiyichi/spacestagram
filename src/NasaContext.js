import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

const NasaContext = React.createContext();

export const NasaProvider = ({ children }) => {
	const APOD_URL = "https://api.nasa.gov/planetary/apod";
	const API_KEY = "API_KEY_GOES_HERE";

	const [postData, setPostData] = useState([]);

	useEffect(() => {
		fetchPostData();
	}, []);

	const fetchPostData = async () => {
		try {
			let response = await axios.get(APOD_URL, {
				params: {
					api_key: API_KEY,
					count: 2
				}
			});
			setPostData(response.data);
			console.log(response.data);
		}
		catch (e) {
			console.error(e);
		}
	}

	return (
		<NasaContext.Provider value={{
			postData,
			fetchPostData,
		}}>
			{children}
		</NasaContext.Provider>
	);
}

export const useNasa = () => useContext(NasaContext);