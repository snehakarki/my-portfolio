import React from "react";
import "../../styles/Mobile/BottomNav.css";

const BottomNav = () => {
  return (
    <div className="bottom-nav-container">
      <div className="nav-dots">
        <span className="dot"></span>
        <span className="dot active"></span>
        <span className="dot"></span>
      </div>
      <div className="bottom-nav">
        <div className="nav-group">
          <button className="nav-button">
            <span>📸</span>
          </button>
          <button className="nav-button">
            <span>📁</span>
          </button>
          <button className="nav-button">
            <span>💬</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
