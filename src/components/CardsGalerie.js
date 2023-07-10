import React from "react";
import Card from "../components/Card";
import "./CardsGalerie.css";
import data from "../assets/logements.json";
import { NavLink } from "react-router-dom";

console.log(data);
const CardsGalerie = () => {
  return (
    <NavLink to="/lodging">
      <div className="galerie">
        {data.map((content) => (
          <Card key={content.id} title={content.title} img={content.cover} />
        ))}
      </div>
    </NavLink>
  );
};

export default CardsGalerie;
