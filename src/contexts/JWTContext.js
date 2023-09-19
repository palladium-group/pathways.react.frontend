import { createContext, useEffect, useReducer } from "react";

import axios from "../utils/axios";
import { isValidToken, setSession } from "../utils/jwt";
import url from "../api";
import { useNavigate } from "react-router-dom";

// Note: If you're trying to connect JWT to your own backend, don't forget
// to remove the Axios mocks in the `/src/index.js` file.

const INITIALIZE = "INITIALIZE";
const SIGN_IN = "SIGN_IN";
const SIGN_OUT = "SIGN_OUT";
const SIGN_UP = "SIGN_UP";

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const JWTReducer = (state, action) => {
  switch (action.type) {
    case INITIALIZE:
      return {
        isAuthenticated: action.payload.isAuthenticated,
        isInitialized: true,
        user: action.payload.user,
      };
    case SIGN_IN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case SIGN_OUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    case SIGN_UP:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };

    default:
      return state;
  }
};

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(JWTReducer, initialState);
  const navigate = useNavigate();
  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = window.localStorage.getItem("accessToken");

        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken);

          try {
            const response = await axios.get(`${url}user/current`);
            const { user } = response.data;

            dispatch({
              type: INITIALIZE,
              payload: {
                isAuthenticated: true,
                user,
              },
            });
          } catch (error) {
            if (
              error.response &&
              (error.response.status === 401 || error.response.status === 403)
            ) {
              console.log("Unauthorized or Forbidden. Removing access token.");
              localStorage.removeItem("accessToken");
              navigate("/auth/sign-in");
            } else {
              localStorage.removeItem("accessToken");
              navigate("/auth/sign-in");
              console.error("An error occurred:", error.message);
            }
          }
        } else {
          dispatch({
            type: INITIALIZE,
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: INITIALIZE,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize();
  }, []);

  const signIn = async (email, password) => {
    const response = await axios.post(
      `${url}auth/login`,
      {
        username: email,
        password: password,
      },
      {
        headers: {
          Authorization: null,
        },
      },
    );
    const { accessToken, user } = response.data;

    setSession(accessToken);
    dispatch({
      type: SIGN_IN,
      payload: {
        user,
      },
    });
  };

  const signOut = async () => {
    setSession(null);
    dispatch({ type: SIGN_OUT });
  };

  const signUp = async (email, password, firstName, lastName) => {
    const response = await axios.post("/api/auth/sign-up", {
      email,
      password,
      firstName,
      lastName,
    });
    const { accessToken, user } = response.data;

    window.localStorage.setItem("accessToken", accessToken);
    dispatch({
      type: SIGN_UP,
      payload: {
        user,
      },
    });
  };

  const resetPassword = async (email) => {
    await axios.post(`${url}reset-password/request`, {
      email,
    });
  };

  const setNewPassword = async (password, token) => {
    await axios.post(`${url}reset-password/new-password`, {
      newPassword: password,
      resetToken: token,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "jwt",
        signIn,
        signOut,
        signUp,
        resetPassword,
        setNewPassword,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
