import React from "react";
import "./login-signup.css";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  // Const to alternate text on the div title

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "success") {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form className="login" onSubmit={handleSubmit}>
        <h1 className="login_title">SE CONNECTER</h1>
        <div className="login__item">
          <CiMail className="login__item__icon" />
          <input
            required="required"
            type="email"
            className="mail"
            placeholder="Adresse mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login__item">
          <RiLockPasswordLine className="login__item__icon" />
          <input
            required="required"
            placeholder="Mot de passe"
            className="password"
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
          />
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
        <div>
          <Link to="/signup">
            <span className="subtitle-user-status">
              Vous n'êtes pas encore client?
            </span>
          </Link>
        </div>
        <div className="submit">
          <button
            type="submit"
            className="btn-signup red"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            SE CONNECTER
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
