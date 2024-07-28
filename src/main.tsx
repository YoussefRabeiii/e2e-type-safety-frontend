import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createClient, Provider } from "urql";

const client = createClient({
	url: "https://graphql-server-prisma-production.up.railway.app/graphql",
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider value={client}>
			<App />
		</Provider>
	</React.StrictMode>
);
