import React from "react";
import Banner from "components/Banner";
import "./style.css";
import CardsGalerie from "components/CardsGalerie";

const Home = () => {
  return (
    <div className="home">
      <Banner src="./home.png" titleLine1="Chez vous," titleLine2=" partout et ailleurs." css="imgBanner" container="banner"/>
      <CardsGalerie />
    </div>
  );
};

export default Home;
