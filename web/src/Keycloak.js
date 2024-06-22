import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
 url: "http://localhost:8081",
 realm: "keycloak-react-auth",
 clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID || "react-auth-local"
});
export default keycloak;