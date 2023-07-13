import React, { useEffect, useState } from "react";
import "./Carrousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //importation de la librairie Fontawesome
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"; //Importation d'icônes spécifiques

const Carrousel = (props) => {
  const pictures = props.pictures;
  console.log("pictures", pictures);

  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const nextSlide = () => {
      if (slideIndex !== pictures.length) {
        setSlideIndex(slideIndex + 1);
      } else if (slideIndex === pictures.length) {
        setSlideIndex(1);
      }
    };

    const prevSlide = () => {
      if (slideIndex !== 1) {
        setSlideIndex(slideIndex - 1);
      } else if (slideIndex === 1) {
        setSlideIndex(pictures.length);
      }
    };
  }, []);

  return (
    <div className="slider">
      {pictures.map((picture, index) => {
        return (
          <div className="slide">
            <img key={index} src={picture}></img>
          </div>
        );
      })}
      <div className="chevrons">
        <FontAwesomeIcon
          icon={faChevronLeft}
          onClick={prevSlide}
          className="chevronLeft"
        />
        <FontAwesomeIcon
          icon={faChevronRight}
          onClick={nextSlide}
          className="chevronRight"
        />
      </div>
    </div>
  );
};

export default Carrousel;
