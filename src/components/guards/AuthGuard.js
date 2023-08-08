import React from "react";
import { Navigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import { isValidToken } from "../../utils/jwt";

// For routes that can only be accessed by authenticated users
function AuthGuard({ children }) {
  const accessToken = window.localStorage.getItem("accessToken");
  const { isAuthenticated, isInitialized } = useAuth();
  if (!isValidToken(accessToken) || (isInitialized && !isAuthenticated)) {
    localStorage.removeItem("accessToken");
    return <Navigate to="/auth/sign-in" />;
  }

  return <React.Fragment>{children}</React.Fragment>;
}

export default AuthGuard;
