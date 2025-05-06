import React, { useRef, useEffect, useState, useContext } from "react";

// Context
import { AuthenticationContext } from "../../Context/AuthenticationContext";

// Components
import Button from "./Button";
import FormGroup from "./FormGroup";

export default function LoginForm() {
  // States
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });

  // References
  const emailRef = useRef();

  // Effects
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  // Context
  const authenticator = useContext(AuthenticationContext);

  // Handlers
  const handleLogin = (e) => {
    e.preventDefault();
    // context
    authenticator.login(auth.email, auth.password);
    clearForm();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAuth({ ...auth, [name]: value });
  };

  function clearForm() {
    setAuth({
      email: "",
      password: "",
    });
  }

  return (
    <div className="form">
      <h2 className="mb-2">Enter your credentials</h2>
      <form>
        <FormGroup
          label={"email"}
          type={"email"}
          name={"email"}
          placeholder={"Enter your email"}
          reference={emailRef}
          value={auth.email}
          onChange={handleInputChange}
        />{" "}
        <FormGroup
          label={"Password"}
          type={"password"}
          name={"password"}
          placeholder={"Enter your password"}
          value={auth.password}
          onChange={handleInputChange}
        />
        <Button
          type={"submit"}
          text="Login"
          classes={"btn-accept btn-block"}
          onClick={handleLogin}
        />
      </form>
    </div>
  );
}
