import React, {useState } from "react";
import "./Carrousel.css";

const Carrousel = (props) => {
  const pictures = props.pictures; // récupération des photos de l'appartement ciblé dans une variable
  console.log("pictures", pictures); // log pour vérifier les éléments présents dans le tableau

  const [slideIndex, setSlideIndex] = useState(0);

  // Fonction CSS pour attribuer une classe aux img permettant, ou non, l'affichage de la photo
  const getClassname = (i) => {
    if (i === slideIndex) return "show";
    return "";
  };

  // Fonction pour passer au slide suivant lors du clic sur le chevron droit
  const nextSlide = () => {
    setSlideIndex((slideIndex + 1) % pictures.length); // On précise qu'on veut faire +1 avec limite la longueur du tableau
    // console.log(slideIndex); // log pour vérifier le numéro de l'index dans l'état local
  };

  // Fonction pour revenir au slide précédant lors du clic sur le chevron gauche
  const prevSlide = () => {
    const newSlideIndex = slideIndex - 1;
    if (newSlideIndex < 0) {
      setSlideIndex(pictures.length - 1);
      return;
    }
    setSlideIndex(slideIndex - 1);
    // console.log(slideIndex); 
  };

  return (
    <div className="slider">
      {pictures.map((picture, index) => {
        // fonction map permettant d'afficher toutes les photos récupérées dans le tableau [pictures]
        return (
          <div className="slide" key={index}>
            <img src={picture} className={getClassname(index)} alt=""></img>
          </div>
        );
      })}
      {/* Opérateur ternaire permetttant d'attribuer différentes classes CSS pour l'affichage ou non de la div chevrons */}
      <button className={pictures.length <= 1 ? "chevronsHidden" : "chevrons" }>
        <i className="fa-solid fa-chevron-left" onClick={prevSlide}></i>
        <span className="sliderCounter">
          {slideIndex + 1}/{pictures.length} {/** Affichage du counter au bas du carroussel*/}
        </span>
        <i className="fa-solid fa-chevron-right" onClick={nextSlide}></i>
      </button>
    </div>
  );
};

export default Carrousel;
