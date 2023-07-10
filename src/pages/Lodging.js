import React from "react";
import Carrousel from "../components/Carrousel";
import "./Lodging.css";
import Tag from "../components/Tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //importation de la librairie Fontawesome
import { faStar } from "@fortawesome/free-solid-svg-icons"; //Importation d'icônes spécifiques
import Accordion from "../components/Accordion";

const Lodging = () => {
  return (
    <reactFragment>
      <Carrousel />
      <div className="content">
        <div className="contentLeft">
          <div className="title">
            <h1>Gros titre</h1>
            <p>Sous-titre</p>
          </div>
          <div className="tags">
            <Tag />
            <Tag />
            <Tag />
          </div>
        </div>
        <div className="contentRight">
          <div className="owner">
            <p>Gary Van-hecke</p>
            <div className="ownerImg">
              <img src="" alt="" />
            </div>
          </div>
          <div className="notation">
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
          </div>
        </div>
      </div>
      <Accordion />
    </reactFragment>
  );
};

export default Lodging;
