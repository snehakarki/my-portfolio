import React, { useState } from "react";
import "../styles/Icon.css";

const Icon = ({ name, icon }) => {
  return (
    <div className="icon">
      <img src={icon} alt={name} className="icon-img" />
      <p>{name}</p>
    </div>
  );
};

export default Icon;
