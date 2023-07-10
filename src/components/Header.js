import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Navigation />
    </div>
  );
};

export default Header;
