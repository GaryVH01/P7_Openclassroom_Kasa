import React, { useEffect, useState } from "react";
import "./Carrousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //importation de la librairie Fontawesome
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"; //Importation d'icônes spécifiques

const Carrousel = (props) => {
  const pictures = props.pictures; // récupération des photos de l'appartement ciblé dans une variable
  console.log("pictures", pictures); // log pour vérifier les éléments présents dans le tableau

  const [slideIndex, setSlideIndex] = useState(0);

  // Fonction CSS pour attribuer une classe aux img permettant, ou non, l'affichage de la photo
  const getClassname = (i) => {
    if (i === slideIndex) return "show";
    return "";
  };

  // Fonction CSS permettant d'afficher ou non les chevrons en fonction du nombre de photos dans [pictures]
  const displayChevrons = () => {
    if (pictures.length <= 1) return "chevronsHidden";
    return "chevrons";
  };

  // Fonction pour passer au slide suivant lors du clic sur le chevron droit
  const nextSlide = () => {
    setSlideIndex((slideIndex + 1) % pictures.length);
    // console.log(slideIndex);
  };

  // Fonction pour revenir au slide précédant lors du clic sur le chevron gauche
  const prevSlide = () => {
    const newSlideIndex = slideIndex - 1;
    if (newSlideIndex < 0) {
      setSlideIndex(pictures.length - 1);
      return;
    }
    setSlideIndex(slideIndex - 1);
    console.log(slideIndex); // log pour vérifier le numéro de l'index dans l'état local
  };

  return (
    <div className="slider">
      {pictures.map((picture, index) => {
        // fonction map permettant d'afficher toutes les photos récupérées dans le tableau [pictures]
        return (
          <div className="slide" key={index}>
            <img src={picture} className={getClassname(index)}></img>
          </div>
        );
      })}
      <div className={displayChevrons()}>
        <FontAwesomeIcon
          icon={faChevronLeft}
          onClick={prevSlide}
          className="chevronLeft"
          role="button"
        />
        <span className="sliderCounter">
          {slideIndex + 1}/{pictures.length}
        </span>
        <FontAwesomeIcon
          icon={faChevronRight}
          onClick={nextSlide}
          className="chevronRight"
          role="button"
        />
      </div>
    </div>
  );
};

export default Carrousel;
