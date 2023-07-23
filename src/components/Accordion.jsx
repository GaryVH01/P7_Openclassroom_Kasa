import React, { useState } from "react"; //importation du hook "useState" depuis React
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //importation de la librairie "Fontawesome"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"; //Importation d'icônes spécifiques
import "./Accordion.css";

const Accordion = (props) => {
  const [isActive, setIsActive] = useState(false); //déclaration du state local en false pour que le collapse soit fermé au chargement de la page

  return (
    <div className={props.itemCss}>
      {/** On passe les props qui permettront d'appliquer différentes propriétés css en fonction des pages */}
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        {/**Ecouteur d'événement au clic */}
        <div>{props.title}</div>
        <button className="faIcons">
          {/** Opérateur ternaire pour afficher une icône ouvrante ou une icône fermante en fonction du state */}
          {isActive ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </button>
      </div>
      {isActive && <div className={props.contentCss}>{props.description}</div>}
      {/** si le state passe à true, alors on affiche le contenu et on lui passe des props */}
    </div>
  );
};

export default Accordion;
