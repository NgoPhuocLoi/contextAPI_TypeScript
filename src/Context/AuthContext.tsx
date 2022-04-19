import React, { createContext, useReducer } from "react";
import { AuthReducer, AuthState } from "../reducers/AuthReducer";
import { ContextProps } from "./constInterface";
import { AuthActionTypes } from "../reducers/types";

interface AuthContextInitialValue {
  authInfo: AuthState,
  toggleAuth: (username: string) => void
}

const initialValue: AuthState = {
  isAuthenticated: false,
  username: "",
};

export const AuthContext = createContext<AuthContextInitialValue>({
  authInfo: initialValue,
  toggleAuth: (username: string) => {},
});

const AuthContextProvider = ({ children }: ContextProps) => {
  const [authInfo, dispatch] = useReducer(AuthReducer, initialValue);
  const toggleAuth = (username: string) => {
    dispatch({ type: AuthActionTypes.TOGGLE_AUTH, payload: username });
  };
  const authValue = {
    authInfo,
    toggleAuth,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
