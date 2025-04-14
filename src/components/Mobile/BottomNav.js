import React, { useState } from "react";
import "../../styles/Mobile/BottomNav.css";
import ProjectModal from "./ProjectModal";
import ProfileModal from "./ProfileModal";
import MessageModal from "./MessageModal";

const BottomNav = () => {
  const [showProjects, setShowProjects] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

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
            <button className="nav-button" onClick={() => setShowProfile(true)}>
              <span>📸</span>
            </button>
            <button className="nav-button" onClick={() => setShowProjects(true)}>
              <span>📁</span>
            </button>
            <button className="nav-button" onClick={() => setShowMessage(true)}>
              <span>💬</span>
            </button>
          </div>
        </div>
      </div>
      <ProjectModal isOpen={showProjects} onClose={() => setShowProjects(false)} />
      <ProfileModal isOpen={showProfile} onClose={() => setShowProfile(false)} />
      <MessageModal isOpen={showMessage} onClose={() => setShowMessage(false)} />
    </>
  );
};

export default BottomNav;
