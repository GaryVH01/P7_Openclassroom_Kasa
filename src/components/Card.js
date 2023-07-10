import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} className="imgCard" alt="blabla" />
      <div className="filter">
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default Card;
