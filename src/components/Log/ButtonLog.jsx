import React from "react";
import "./ButtonLog.css";
import { FaRegUserCircle } from "react-icons/fa";

// Icones pour informer si l'utilisateur est connecté
// import { RiUserFollowLine, RiUserForbidFill } from "react-icons/ri";

const ButtonLog = () => {
  return (
    <button className="btn-log">
      <span>Se connecter</span>
      <FaRegUserCircle />
    </button>
  );
};

export default ButtonLog;
