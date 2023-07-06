import React from "react";
import "../styles/components/DropDown.css";
// import { useState } from "react";

const DropdDown = () => {
  return (
    <div className="accordion">
      <div className="contentBox">
        <div className="label">Fiabilité</div>
        <div className="content">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </div>
      </div>
      <div className="contentBox">
        <div className="label">Respect</div>
        <div className="content">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </div>
      </div>
      <div className="contentBox">
        <div className="label">Service</div>
        <div className="content">
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N'hésitez pas à nous contacter si vous avez la
          moindre question.
        </div>
      </div>
      <div className="contentBox">
        <div className="label">Sécurité</div>
        <div className="content">
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </div>
      </div>
    </div>
  );
};

export default DropdDown;
