import React from "react";
import "./Banner.css";

const Banner = (props) => {
  return (
    <div className="banner">
      <h1>{props.title}</h1>
      <img
        className="imgBanner"
        src={props.src}
        alt="Falaise et mer en contre bas."
      />
    </div>
  );
};

export default Banner;
