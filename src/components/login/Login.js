import "./styles.scss";

import React, { useContext, useEffect, useRef, useState } from "react";

import Box from "components/ui/box/Box";
import GButton from "components/ui/button/Button";
import GroceryInput from "components/ui/input/GroceryInput";
import { authenticationContext } from "provider/auth-context";
import usePrevious from "hooks/use-previous";

function Login() {
  // Lesson is using forward refs const inputRef = useRef(type === "number" ? 0 : "");
  const [value, setValue] = useState({
    email: "",
    pass: "",
  });
  const { setAuthentication } = useContext(authenticationContext);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onChangeHandler = (e) => {
    // console.log(e); // error handling
    if (e.target.name === "email") {
      emailRef.current = e.target.value;
    }
    if (e.target.name === "password") {
      passwordRef.current = e.target.value;
    }
  };

  const onKeyPressHandle = (e) => {
    // console.log(e);
    if (e.keyCode === 13) {
      //if (emailRef.current.value.length > 0) {
      passwordRef.current.focus();
      //}
    }
  };

  const { email, pass } = usePrevious(value);

  const loginHandler = (e) => {
    e.preventDefault();
    setValue({ email: emailRef.current, pass: passwordRef.current });
    setAuthentication(true);
  };
  // Custom hook to memorize last input value and type

  console.log("You entered ", email, "", pass, "before");
  //   useEffect(() => {
  //     console.log("You entered ", email, "", pass, "before");
  //     //return () => {};
  //   }, [email, pass]);

  useEffect(() => {
    // console.log(emailRef.current);
    emailRef.current.focus();
    return () => {};
  }, []);

  return (
    <div data-testid="login">
      <h2>Sign In To React Hooks Discord</h2>
      <form className="grocery-login-form" onSubmit={loginHandler}>
        <div className="grocery-login-form__container">
          <Box className="grocery-login-form__form-field">
            <GroceryInput
              ref={emailRef}
              type="text"
              label="Email"
              name="email"
              changeHandler={onChangeHandler}
              keyPressHandle={onKeyPressHandle}
            />
            <GroceryInput
              ref={passwordRef}
              type="password"
              label="Password"
              name="pass"
              changeHandler={onChangeHandler}
              keyPressHandle={onKeyPressHandle}
            />
            <GButton type="submit" className="grocery-login-form__button">
              Login
            </GButton>
          </Box>
          <p>You entered {email}</p>
        </div>
      </form>
    </div>
  );
}

export default Login;
