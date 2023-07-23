import React from "react";
import "./Tag.css";

const Tag = ({ tagName }) => { {/** Déclaration d'un seule props qui sera appelée dans la page Lodging */}
  return (
    <div className="sectionTag">
      <div className="tag"> {tagName}</div>
    </div>
  );
};

export default Tag;
