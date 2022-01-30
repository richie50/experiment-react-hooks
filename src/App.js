import "./App.scss";

import React, { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";

import AuthenticationProvider from "provider/auth-context";
import Header from "layout/header/Header";

// import HomePage from "./layout/pages/home/HomePage";
// import LoginPage from "./layout/pages/login/LoginPage";
// import LogoutPage from "./layout/pages/logout/LogoutPage";
// import NotFound from "./layout/pages/404/NotFound";

// code splitting
const HomePage = React.lazy(() => import("./layout/pages/home/HomePage"));
const LoginPage = React.lazy(() => import("./layout/pages/login/LoginPage"));
const LogoutPage = React.lazy(() => import("./layout/pages/logout/LogoutPage"));
const NotFound = React.lazy(() => import("./layout/pages/404/NotFound"));

function App() {
  const [loggedIn, setLogin] = useState(false);
  return (
    <>
      <AuthenticationProvider
        value={{
          loggedIn,
          hasSuperPowers: false,
          setAuthentication: setLogin,
        }}
      >
        <Suspense fallback={<p>Lazy Loading...</p>}>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<HomePage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="sign-out" element={<LogoutPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </AuthenticationProvider>
    </>
  );
}

export default App;
