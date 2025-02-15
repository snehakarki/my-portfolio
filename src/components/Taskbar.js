import React from "react";
import { FaWindows, FaSearch, FaCloud } from "react-icons/fa";
import "../styles/Taskbar.css";

const Taskbar = () => {
  const currentTime = new Date();
  const time = currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const date = currentTime.toLocaleDateString([], { weekday: "short", day: "2-digit", month: "short" });

  return (
    <div className="taskbar">
      {/* Left Section - Weather Info */}
      <div className="taskbar-left">
        <FaCloud className="weather-icon" />
        <span>Cloudy, 20°C</span>
      </div>

      {/* Middle Section - Windows Button, Search Bar, and Pinned Apps */}
      <div className="taskbar-middle">
        <button className="start-btn"><FaWindows /></button>
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      {/* Right Section - Date & Time */}
      <div className="taskbar-right">
        <div className="date">{date}</div>
        <div className="time">{time}</div>
      </div>
    </div>
  );
};

export default Taskbar;
