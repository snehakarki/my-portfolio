import React from "react";
import "../styles/Taskbar.css";

const Taskbar = () => {
  return (
    <div className="taskbar">
      <button className="start-btn">Start</button>
      <div className="time">{new Date().toLocaleTimeString()}</div>
    </div>
  );
};

export default Taskbar;
