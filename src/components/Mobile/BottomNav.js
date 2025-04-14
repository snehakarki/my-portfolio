import React, { useState } from "react";
import "../../styles/Mobile/BottomNav.css";
import ProjectModal from "./ProjectModal";

const BottomNav = () => {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <>
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
            <button className="nav-button" onClick={() => setShowProjects(true)}>
              <span>📁</span>
            </button>
            <button className="nav-button">
              <span>💬</span>
            </button>
          </div>
        </div>
      </div>
      <ProjectModal isOpen={showProjects} onClose={() => setShowProjects(false)} />
    </>
  );
};

export default BottomNav;
