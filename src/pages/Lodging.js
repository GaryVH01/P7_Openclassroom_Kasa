import React from "react";
import Carrousel from "../components/Carrousel";
import "./Lodging.css";

const Lodging = () => {
  return (
    <reactFragment>
      <Carrousel />
      <div className="content">
        <div className="contentLeft">
          <div className="title">
            <h1>Gros titre</h1>
            <p>Sous-titre</p>
          </div>
          <div className="tags">tags</div>
        </div>
        <div className="contentRight">
          <div className="owner">
            <p>patrick</p>
            <img src="" alt="" />
          </div>
          <div className="notation">
            <span>i</span>
            <span>i</span>
            <span>i</span>
            <span>i</span>
            <span>i</span>
          </div>
        </div>
      </div>
    </reactFragment>
  );
};

export default Lodging;
