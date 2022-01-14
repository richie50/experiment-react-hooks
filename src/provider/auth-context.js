import React, { createContext } from "react";

const loginInfo = {
  loggedIn: false,
  hasSuperPowers: false,
  setAuthentication: (authValue) => {},
};
const authenticationContext = createContext(loginInfo);
const AuthenticationProvider = authenticationContext.Provider;

export { authenticationContext };
export default AuthenticationProvider;
