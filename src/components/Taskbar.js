import React from "react";
import { FaWindows } from "react-icons/fa";
import "../styles/Taskbar.css";

const Taskbar = () => {
  return (
    <div className="taskbar">
      {/* Left Section - Weather */}
      <div className="left-section">
        <span>☁️ 20°C</span>
      </div>

      {/* Center Section - Start Button & Search */}
      <div className="center-section">
        <button className="start-btn">
          <FaWindows size={20} />
        </button>
        <input type="text" className="search-bar" placeholder="Search..." />
      </div>

      {/* Right Section - Date & Time */}
      <div className="right-section">
        <span>{new Date().toLocaleDateString()}</span>
        <span>{new Date().toLocaleTimeString()}</span>
      </div>
    </div>
  );
};

export default Taskbar;
