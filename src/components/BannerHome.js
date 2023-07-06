import React from "react";
import "../styles/components/BannerHome.css";

const BannerHome = () => {
  return (
    <div className="bannerHome">
      <img
        className="imgBannerHome"
        src="./banner.png"
        alt="photo d'accueil du site. Falaise et mer en contre bas."
      />
    </div>
  );
};

export default BannerHome;
