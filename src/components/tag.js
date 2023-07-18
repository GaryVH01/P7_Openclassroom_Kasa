import React from "react";
import "./Tag.css";

const Tag = ({ tagName }) => {
  return (
    <div className="sectionTag">
      <div className="tag"> {tagName}</div>
    </div>
  );
};

export default Tag;
