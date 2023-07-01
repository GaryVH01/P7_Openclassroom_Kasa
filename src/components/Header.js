import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import "../styles/components/Header.css";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Navigation />
    </div>
  );
};

export default Header;
