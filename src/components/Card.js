import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link className="cardLink" to="/lodging" state={{ id: props.id }}>
      <div className="card">
        <img src={props.img} className="imgCard" alt="blabla" />
        <div className="filter">
          <p>{props.title}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
