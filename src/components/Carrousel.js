import React from "react";
import data from "../assets/logements.json";
import "./Carrousel.css";

const Carrousel = () => {
  return (
    <div>
      <div className="carrousel">
        <img
          src="./Carrousel.png"
          className="slide"
          alt="Rivière s'écoulant au travers de hautes montagnes."
        />
      </div>
    </div>
  );
};

export default Carrousel;
