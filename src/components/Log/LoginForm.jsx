import React from "react";
import "./LoginForm.css";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [action, setAction] = useState("S'INSCRIRE");

  return (
    <div className="login">
      <h1 className="login_title">{action}</h1>
      {action === "SE CONNECTER" ? (
        <div></div>
      ) : (
        <div className="login__item">
          {/* <label htmlFor="Login"></label> */}
          <FaRegUser className="login__item__icon" />
          <input type="text" placeholder="Nom d'utilisateur" />
        </div>
      )}

      <div className="login__item">
        {/* <label htmlFor="mail"></label> */}
        <CiMail className="login__item__icon" />
        <input type="text" placeholder="Adresse mail" />
      </div>
      <div className="login__item">
        {/* <label htmlFor="password"></label> */}
        <RiLockPasswordLine className="login__item__icon" />
        <input
          placeholder="Mot de passe"
          className="password"
          type={showPassword ? "text" : "password"}
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
      {action === "S'INSCRIRE" ? (
        <div></div>
      ) : (
        <p className="lostpass">
          Si vous avez égaré votre mot de passe,{" "}
          <NavLink to="#">cliquez-ici</NavLink>
        </p>
      )}

      <div className="submit">
        <button
          className={action === "S'INSCRIRE" ? "btn-signup red" : "btn-signup"}
          onClick={() => {
            setAction("S'INSCRIRE");
          }}
        >
          S'INSCRIRE
        </button>
        <button
          className={
            action === "SE CONNECTER" ? "btn-connect red" : "btn-connect"
          }
          onClick={() => {
            setAction("SE CONNECTER");
          }}
        >
          Se connecter
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
