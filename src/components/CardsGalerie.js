import React from "react";
import Card from "../components/Card";
import "./CardsGalerie.css";
import data from "../assets/logements.json";

console.log(data);

const CardsGalerie = (props) => {
  return (
    <div className="galerie">
      {data.map((content) => (
        <Card
          key={content.id}
          id={content.id}
          title={content.title}
          img={content.cover}
        />
      ))}
    </div>
  );
};

export default CardsGalerie;
