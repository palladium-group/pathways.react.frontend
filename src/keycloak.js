import Keycloak from "keycloak-js";

export const kc = new Keycloak({
  url: `${process.env.REACT_APP_KEYCLOAK_URL}`,
  realm: `${process.env.REACT_APP_KEYCLOAK_REALM}`,
  clientId: `${process.env.REACT_APP_KEYCLOAK_CLIENT}`,
  onLoad: "login-required",
});
