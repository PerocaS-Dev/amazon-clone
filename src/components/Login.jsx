import React, { useState, useEffect, useReducer, useContext} from "react";
import { Link } from "react-router-dom";
import './Login.css';
import AuthContext from "../../src/context/authContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "EMAIL_INPUT":
      return { ...state, email: action.payload };
    case "PASS_INPUT":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

const Login = () => {
  const ctx = useContext(AuthContext);
  const [formIsValid, setFormIsValid] = useState(false);
  const [state, dispatch] = useReducer(reducer, { email: "", password: "" });
  const { email, password } = state;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(email.includes("@") && password.trim().length > 6);
    }, 500);
    return () => clearTimeout(identifier);
  }, [email, password]);

  const emailChangeHandler = (e) => {
    dispatch({ type: "EMAIL_INPUT", payload: e.target.value });
  };

  const passwordChangeHandler = (e) => {
    dispatch({ type: "PASS_INPUT", payload: e.target.value });
  };

  const signIn = (e) => {
    e.preventDefault();
    console.log("Entered Email:", email);
    console.log("Entered Password:", password);
    ctx.onLogin(email,password);

  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
          alt="Amazon logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign In</h1>
        <form onSubmit={signIn}>
          <h5>E-mail</h5>
          <input 
            type="text" 
            value={email} 
            onChange={emailChangeHandler} 
          />

          <h5>Password</h5>
          <input 
            type="password" 
            value={password} 
            onChange={passwordChangeHandler} 
          />

          <button 
            type="submit" 
            className="login_signInButton"
            disabled={!formIsValid}
          >
            Sign In
          </button>
          <p>
            By signing in, you agree to Amazon's Conditions of Use & Sale.
            Please see our Privacy Notice, our Cookies Notice, and our
            Interest-Based Ads Notice.
          </p>
          <button className="login_registerButton">
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

