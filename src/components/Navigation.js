import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div>
      <ul className="navigation">
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/about">
          <li>À propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
