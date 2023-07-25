import React from "react";
import Banner from "components/Banner";
import "./style.css";
import CardsGalerie from "components/CardsGalerie";

const Home = () => {
  return (
    <div className="home">
      <Banner src="./home.png" title="Chez vous, partout et ailleurs." />
      <CardsGalerie />
    </div>
  );
};

export default Home;
