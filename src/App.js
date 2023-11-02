import React, { createContext, useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import { Provider } from "react-redux";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { CacheProvider } from "@emotion/react";

import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import "./i18n";
import createTheme from "./theme";
import routes from "./routes";

import useTheme from "./hooks/useTheme";
import { store } from "./redux/store";
import createEmotionCache from "./utils/createEmotionCache";
// import { AuthProvider } from "./contexts/JWTContext";
// import { AuthProvider } from "./contexts/FirebaseAuthContext";
// import { AuthProvider } from "./contexts/Auth0Context";
// import { AuthProvider } from "./contexts/CognitoContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { kc } from "./keycloak";

export const AuthProvider = createContext(null);

const clientSideEmotionCache = createEmotionCache();

function App({ emotionCache = clientSideEmotionCache }) {
  const [userInformation, SetUserInformation] = useState();

  useEffect(() => {
    kc.init({
      onLoad: "login-required",
      checkLoginIframe: false,
    }).then((auth) => {
      try {
        if (auth) {
          const user = {
            name: kc.tokenParsed.name,
            token: kc.token,
            roles: kc.tokenParsed?.resource_access?.["palladium-gateway-client"]?.roles,
          };
          localStorage.setItem("token", kc.token);
          SetUserInformation(user);
        } else {
          SetUserInformation(null);
        }
      } catch (e) {
        console.log(e);
      }
    });
    kc.onTokenExpired = () => {
      kc.updateToken(30);
    };
  }, []);

  const content = useRoutes(routes);

  const { theme } = useTheme();

  return (
    <CacheProvider value={emotionCache}>
      <HelmetProvider>
        <Helmet titleTemplate="%s | PATHWAYS" defaultTitle="PATHWAYS" />
        <Provider store={store}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MuiThemeProvider theme={createTheme(theme)}>
              <AuthProvider.Provider value={userInformation}>
                {userInformation && content}
              </AuthProvider.Provider>
            </MuiThemeProvider>
          </LocalizationProvider>
        </Provider>
        <ToastContainer position="top-right" newestOnTop />
      </HelmetProvider>
    </CacheProvider>
  );
}

export default App;
