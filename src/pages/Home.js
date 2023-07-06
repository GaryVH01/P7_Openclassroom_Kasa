import React from "react";
import BannerHome from "../components/BannerHome";
import "../styles/pages/Home.css";
import CardsGalerie from "../components/CardsGalerie";

const Home = () => {
  return (
    <div>
      <BannerHome />
      <CardsGalerie />
    </div>
  );
};

export default Home;
