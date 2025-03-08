import React, { useEffect, useState } from "react";
import { FaWindows } from "react-icons/fa";
import StartMenu from "./StartMenu"; 
import "../styles/Taskbar.css";

const Taskbar = ({ openWindows, onRestore, onClose }) => {
  const [time, setTime] = useState(new Date());
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [dockedWindows, setDockedWindows] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleStartMenuToggle = () => {
    if (startMenuOpen) {
      setStartMenuOpen(false); 
    } else {
      setStartMenuOpen(true);
    }
  };
  
  const handleStartMenuClose = () => {
    setStartMenuOpen(false);
  };

  useEffect(() => {
    setDockedWindows((prevDocked) => {
      let updatedDocked = [...prevDocked];

      openWindows.forEach((win) => {
        if (!updatedDocked.some((w) => w.id === win.id)) {
          updatedDocked.push(win);
        }
      });

      updatedDocked = updatedDocked.filter((win) =>
        openWindows.some((w) => w.id === win.id)
      );

      return updatedDocked;
    });
  }, [openWindows]);

  const handleClose = (win) => {
    onClose(win); 
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

      <div className="docked-icons">
        {dockedWindows.map((win) => (
          <button
            key={win.id}
            className="docked-icon"
            onClick={() => onRestore(win)}
            onContextMenu={(e) => {
              e.preventDefault();
              handleClose(win);
            }}
          >
            <img src={win.icon} alt={win.name} />
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
