import React, { useEffect, useRef, useState } from "react";
import "../styles/StartMenu.css";
import { FaUser, FaLaptopCode, FaBriefcase, FaProjectDiagram, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

import Profile from "./StartMenuSections/Profile";
import Experience from "./StartMenuSections/Experience";
import TechStack from "./StartMenuSections/Techstack";
import Projects from "./StartMenuSections/Projects";

const StartMenu = ({ isOpen, onClose }) => {
  const menuRef = useRef(null);
  const [selectedSection, setSelectedSection] = useState("profile");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="start-menu" ref={menuRef}>
      {/* Left Sidebar */}
      <div className="start-sidebar">
        <ul>
          <li className={selectedSection === "profile" ? "active" : ""} onClick={() => setSelectedSection("profile")}>
            <FaUser /> Profile
          </li>
          <li className={selectedSection === "experience" ? "active" : ""} onClick={() => setSelectedSection("experience")}>
            <FaBriefcase /> Experience
          </li>
          <li className={selectedSection === "techstack" ? "active" : ""} onClick={() => setSelectedSection("techstack")}>
            <FaLaptopCode /> Tech Stack
          </li>
          <li className={selectedSection === "projects" ? "active" : ""} onClick={() => setSelectedSection("projects")}>
            <FaProjectDiagram /> Projects
          </li>
        </ul>
      </div>

      <div className="start-content">
        {selectedSection === "profile" && <Profile />}
        {selectedSection === "experience" && <Experience />}
        {selectedSection === "techstack" && <TechStack />}
        {selectedSection === "projects" && <Projects />}
      </div>

      <div className="start-menu-footer"> 
        <div className="social-icons">
          <span className="mss-text">Connect with me :</span>  
          <a href="mailto:sneha25karki@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/sneha-k-82aa751ba/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://www.instagram.com/s._.karki" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default StartMenu;
