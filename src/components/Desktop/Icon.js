import React from "react";
import "../../styles/Icon.css";

const Icon = ({ name, icon, onDoubleClick }) => {
  return (
    <div className="icon" onDoubleClick={onDoubleClick}>
      <img src={icon} alt={name} className="icon-img" />
      <p className="icon-text">{name}</p>
    </div>
  );
};

export default Icon;
