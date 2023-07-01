import React from "react";
import Header from "../components/Header";
import "../styles/pages/Page404.css";

const PageNotFind = () => {
  return (
    <div>
      <Header />
      <div className="error404">
        <h1 className="title">404</h1>
        <p className="description">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <a href="/">
          <p className="backLink">Retourner sur la page d'accueil</p>
        </a>
      </div>
    </div>
  );
};

export default PageNotFind;
