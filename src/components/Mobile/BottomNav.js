import React, { useState } from "react";
import "../../styles/Mobile/BottomNav.css";
import ProjectModal from "./ProjectModal";
import ProfileModal from "./ProfileModal";
import MessageModal from "./MessageModal";
import photoIcon from "../../assets/icons/photo_icon.png";
import folderIcon from "../../assets/icons/folder_icon.png";
import messageIcon from "../../assets/icons/mess_icon.png";

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
              <img src={photoIcon} alt="Profile" className="nav-icon" />
            </button>
            <button className="nav-button" onClick={() => setShowProjects(true)}>
              <img src={folderIcon} alt="Projects" className="nav-icon" />
            </button>
            <button className="nav-button" onClick={() => setShowMessage(true)}>
              <img src={messageIcon} alt="Message" className="nav-icon" />
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
