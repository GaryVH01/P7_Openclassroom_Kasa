import React from "react";
import "./LoginForm.css";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login">
      <h1 className="login_title">Connectez-vous</h1>
      <div className="login__item">
        <label htmlFor="Login">Login</label>
        <input type="text" />
      </div>
      <div className="login__item">
        <label htmlFor="password">Password</label>
        <input className="password" type={showPassword ? "text" : "password"} />
        <div className="log-icons">
          {showPassword ? (
            <FaRegEyeSlash
              className="password__icon-eye-hide"
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <FaRegEye
              className="password__icon-eye-show"
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </div>
      </div>

      <p>
        Si vous n'êtes pas encore membre, <a href="">créez votre compte</a>
      </p>
      <button className="btn-connect">Se connecter</button>
    </div>
  );
};

export default LoginForm;
