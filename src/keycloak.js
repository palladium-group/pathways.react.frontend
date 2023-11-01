import Keycloak from "keycloak-js";

export const kc = new Keycloak({
  url: "https://nextgen-pct-kc.eastus.cloudapp.azure.com/auth",
  realm: "ghsc_auth",
  clientId: "50cef36b-30d6-4cf1-8c7e-313af16a877d",
  onLoad: "login-required",
});
