import React from "react";
import Card from "components/Card";
import "./style.css";
import data from "assets/logements.json";

console.log(data);

const CardsGalerie = (props) => { {/** On remonte les props de "Card" et on map le tableau d'appartment au format JSON */}
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
