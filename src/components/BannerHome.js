import React from "react";
import "./BannerHome.css";

const BannerHome = () => {
  return (
    <div className="bannerHome">
      <h1>Chez vous, partout et ailleurs.</h1>
      <img
        className="imgBannerHome"
        src="./banner.png"
        alt="Falaise et mer en contre bas."
      />
    </div>
  );
};

export default BannerHome;
