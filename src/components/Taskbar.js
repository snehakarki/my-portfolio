import React, { useEffect, useState } from "react";
import { FaWindows } from "react-icons/fa";
import "../styles/Taskbar.css";

const Taskbar = ({ openWindows, onClose, onRestore }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="taskbar">
      <div className="left-section">
        <span>☁️ 20°C</span>
      </div>

      <div className="center-section">
        <button className="start-btn">
          <FaWindows size={20} />
        </button>

        {/* Docked Windows */}
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
    </div>
  );
};

export default Taskbar;
