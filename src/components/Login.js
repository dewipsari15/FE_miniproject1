import React from "react";
import { Link } from "react-router-dom";
import "../components/Style.css";

function Login() {
  return (
    <div>
      <div className="login-page">
        <div className="form">
          <form className="login-form">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>login</button>
            <p className="message">
              Not registered? <Link to="/Register">Create an Account</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
