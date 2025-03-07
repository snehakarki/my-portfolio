import React, { useEffect, useState } from "react";
import { FaWindows } from "react-icons/fa";
import StartMenu from "./StartMenu"; 
import "../styles/Taskbar.css";

const Taskbar = ({ openWindows, onRestore }) => {
  const [time, setTime] = useState(new Date());
  const [startMenuOpen, setStartMenuOpen] = useState(false); 

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleStartMenuToggle = () => {
    setStartMenuOpen((prevState) => !prevState); 
  };

  const handleStartMenuClose = () => {
    setStartMenuOpen(false); 
  };

  return (
    <div className="taskbar">
      <div className="left-section">
        <span>☁️ 20°C</span>
      </div>

      <div className="center-section">
        <button className="start-btn" onClick={handleStartMenuToggle}>
          <FaWindows size={20} />
        </button>
      </div>

      <div className="taskbar-windows">
        {openWindows.map((win) => (
          <button key={win.id} className="taskbar-window" onClick={() => onRestore(win)}>
            <img src={win.icon} alt={win.name} className="taskbar-icon" />
          </button>
        ))}
      </div>

      <div className="right-section">
        <span>{time.toLocaleDateString()}</span>
        <span>{time.toLocaleTimeString()}</span>
      </div>

      <StartMenu isOpen={startMenuOpen} onClose={handleStartMenuClose} />
    </div>
  );
};

export default Taskbar;
