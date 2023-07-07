import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} className="imgCard" alt="blabla" />
      <p>{props.title}</p>
    </div>
  );
};

export default Card;
