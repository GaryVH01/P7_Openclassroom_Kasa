import React from "react";
import Card from "../components/Card";
import "../styles/components/CardsGalerie.css";
import data from "../assets/logements.json";

console.log(data);
const CardsGalerie = () => {
  return (
    <div className="galerie">
      {data.map((content) => (
        <Card title={content.title} img={content.cover} />
      ))}
    </div>
  );
};

export default CardsGalerie;
