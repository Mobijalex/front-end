import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-0kxzpufov1misnoj.us.auth0.com"
      clientId="xO32317yCjJkl24M40EtLZRmZ2LYrHNs"
      authorizationParams={{
        redirect_uri: "http://localhost:3000/",
      }}
      audience="http://localhost:8000"
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
