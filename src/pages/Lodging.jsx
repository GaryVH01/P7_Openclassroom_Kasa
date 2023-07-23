import React from "react";
import Carrousel from "../components/Carrousel";
import "./Lodging.css";
import Tag from "../components/Tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //importation de la librairie Fontawesome
import { faStar } from "@fortawesome/free-solid-svg-icons"; //Importation d'icônes spécifiques
import Accordion from "../components/Accordion";
import data from "../assets/logements.json";
import {Navigate, useParams} from "react-router-dom";

const Lodging = () => {
const { id } = useParams();
console.log("ApartementId", id);

const apartment = data.find((apt) => apt.id === id);
console.log("apartement filtré", apartment);

  return (
    <div>
    {apartment !== undefined ? (
    <div>
      <Carrousel pictures={apartment.pictures} />
      <div className="content">
        <div className="contentLeft">
          <div className="title">
            <h1>{apartment.title}</h1>
            <p>{apartment.location}</p>
          </div>
          <div className="tags">
            {apartment.tags.map((tags, index) => (
              <Tag key={index} tagName={tags} />
            ))}
          </div>
        </div>
        <div className="contentRight">
          <div className="owner">
            <p>{apartment.host.name}</p>
            <div className="ownerImg">
              <img src={apartment.host.picture} alt="" />
            </div>
          </div>
          <div className="notation">
            {[1, 2, 3, 4, 5].map((index) => (
              <FontAwesomeIcon
                className={
                  apartment.rating >= index ? "starTrue" : "starFalse"
                }
                icon={faStar}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="accordions">
        <div className="accordionDescription">
          <Accordion
            title="Description"
            description={apartment.description}
            contentCss="accordionContentLodging"
            itemCss="accordionItemLodging"
          />
        </div>
        <div className="accordionEquipment">
          <Accordion
            title="Equipements"
            contentCss="accordionContentLodging"
            itemCss="accordionItemLodging"
            description={apartment.equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          />
        </div>
      </div>
    </div>
    ):(
      <Navigate replace to={"/404"}/> //renvoi vers la page 404 en cas d'URL de logement invalide>
    )}
    </div>
  );
};

export default Lodging;
