import React from "react";
import "./login-signup.css";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  // Const to alternate text on the div title

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/signup", { name, email, password })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
    navigate("/login");
  };

  return (
    <div>
      <form className="login" onSubmit={handleSubmit}>
        <h1 className="login_title">S'INSCRIRE</h1>
        <div className="login__item">
          <FaRegUser className="login__item__icon" />
          <input
            required="required"
            type="text"
            placeholder="Nom d'utilisateur"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
          <Link to="/login">
            <span>Vous êtes déjà client?</span>
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
            S'INSCRIRE
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
