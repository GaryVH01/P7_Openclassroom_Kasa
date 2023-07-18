import React, { useEffect, useState } from "react";
import Carrousel from "../components/Carrousel";
import "./Lodging.css";
import Tag from "../components/Tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //importation de la librairie Fontawesome
import { faStar } from "@fortawesome/free-solid-svg-icons"; //Importation d'icônes spécifiques
import Accordion from "../components/Accordion";
import data from "../assets/logements.json";
import { useLocation } from "react-router-dom";
// import axios from "axios";

const Lodging = () => {
  const location = useLocation();
  // console.log(location);
  // console.log("id de la fiche logement :", location.state.id);

  const [dataFiltered, setdataFiltered] = useState(null);

  useEffect(() => {
    const apartment = data.find((lodging) => lodging.id === location.state.id);
    console.log("apartement ciblé", apartment);
    setdataFiltered(apartment);
  }, []);

  if (dataFiltered == null) return <div>...Loading</div>;

  return (
    <div>
      <Carrousel pictures={dataFiltered.pictures} />
      <div className="content">
        <div className="contentLeft">
          <div className="title">
            <h1>{dataFiltered.title}</h1>
            <p>{dataFiltered.location}</p>
          </div>
          <div className="tags">
            {dataFiltered.tags.map((tags, index) => (
              <Tag key={index} tagName={tags} />
            ))}
          </div>
        </div>
        <div className="contentRight">
          <div className="owner">
            <p>{dataFiltered.host.name}</p>
            <div className="ownerImg">
              <img src={dataFiltered.host.picture} alt="" />
            </div>
          </div>
          <div className="notation">
            {[1, 2, 3, 4, 5].map((index) => (
              <FontAwesomeIcon
                className={
                  dataFiltered.rating >= index ? "starTrue" : "starFalse"
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
            description={dataFiltered.description}
            contentCss="accordionContentLodging"
            itemCss="accordionItemLodging"
          />
        </div>
        <div className="accordionEquipment">
          <Accordion
            title="Equipements"
            contentCss="accordionContentLodging"
            itemCss="accordionItemLodging"
            description={dataFiltered.equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          />
        </div>
      </div>
    </div>
  );
};

export default Lodging;
