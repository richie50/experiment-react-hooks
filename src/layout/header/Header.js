import "./styles.scss";

import { NavLink, Outlet } from "react-router-dom";
import React, { useContext, useMemo } from "react";

import { authenticationContext } from "provider/auth-context";
import logo from "logo.svg";

function Header() {
  // react-router v6 , oh boy why
  const { loggedIn } = useContext(authenticationContext);

  const isActive = useMemo(() => {
    //experimentation
    return ({ isActive }) => (isActive ? "link-active" : "");
  }, []);

  // console.log(isActive);
  return (
    <>
      <div className="header">
        <header className="header-primary">
          <div className="header-primary__logo">
            <img className="header-primary__img" src={logo} alt="Logo" />
          </div>
          <h2 className="header-primary__title">Learn React Hooks</h2>
          <nav className="header-navigation">
            <ul className="header-navigation__list">
              <li className="header-navigation__links">
                <NavLink className={isActive} to="/">
                  Home
                </NavLink>
              </li>
              <li className="header-navigation__links">
                {loggedIn ? (
                  <NavLink className={isActive} to="/sign-out">
                    Sign Out
                  </NavLink>
                ) : (
                  <NavLink className={isActive} to="/login">
                    Sign In
                  </NavLink>
                )}
              </li>
            </ul>
          </nav>
        </header>
      </div>
      {/* COMES WITH EXPERIENCES*/}
      <Outlet />
    </>
  );
}

export default Header;
