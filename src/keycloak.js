import Keycloak from "keycloak-js";

export const kc = new Keycloak({
  url: "https://nextgen-pct-kc.eastus.cloudapp.azure.com/auth",
  realm: "pathways",
  clientId: "pathways-frontend-client",
  onLoad: "login-required",
});
