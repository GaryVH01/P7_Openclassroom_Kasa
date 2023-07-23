import React from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";
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
