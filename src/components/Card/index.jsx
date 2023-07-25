import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link className="cardLink" to={`/lodging/${props.id}`}>  {/** Création des liens vers les différents appartements grâce à l'id  */}
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
