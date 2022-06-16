import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NasaProvider } from './NasaContext';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <NasaProvider>
		<App/>
	</NasaProvider>
);