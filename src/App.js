import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import About from "pages/About";
import Page404 from "pages/Page404";
import "settings.css";
import Header from "components/Header";
import Footer from "components/Footer";
import Lodging from "pages/Lodging";
import SignupPage from "pages/SignupPage/SignupPage";
import LoginPage from "pages/LoginPage/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header /> {/** Importation du Header à la racine*/}
      <Routes>
        {/** Déclaration des routes pour la navigation sur le site */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/lodging/:id" element={<Lodging />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer /> {/** Importation du Footer à la racine */}
    </BrowserRouter>
  );
};

export default App;
