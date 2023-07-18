import React, { useState } from "react"; //import du hook useState depuis React
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //importation de la librairie Fontawesome
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"; //Importation d'icônes spécifiques
import "./Accordion.css";

const Accordion = (props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={props.itemCss}>
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{props.title}</div>
        <div className="faIcons">
          {isActive ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </div>
      </div>
      {isActive && <div className={props.contentCss}>{props.description}</div>}
    </div>
  );
};

export default Accordion;
