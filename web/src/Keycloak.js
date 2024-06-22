import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
 url: "http://localhost:8081",
 realm: "keycloak-react-auth",
 clientId: "react-auth-local",
});

export default keycloak;