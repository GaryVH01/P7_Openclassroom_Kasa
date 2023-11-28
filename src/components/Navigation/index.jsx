import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import ButtonLog from "components/Log/ButtonLog";

const Navigation = () => {
  return (
    <div>
      <ul className="navigation">
        <NavLink to="/">
          {" "}
          {/** Création des liens de navigation */}
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/about">
          <li>A propos</li>
        </NavLink>
        <NavLink to="/login">
          <ButtonLog />
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
