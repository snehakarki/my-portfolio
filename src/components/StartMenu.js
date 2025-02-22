import React, { useEffect, useRef, useState } from "react";
import "../styles/StartMenu.css";
import {
  FaUser, FaLaptopCode, FaBriefcase, FaProjectDiagram, FaLinkedin,
  FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaUniversity
} from "react-icons/fa";

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

      {/* Right Panel */}
      <div className="start-content">
        {selectedSection === "profile" && (
          <div className="profile-section">
            <img src="/profile.jpg" alt="Profile" className="profile-pic" />
            <h1>Sneha Karki</h1>
            <p>Software Developer | Web & AI Enthusiast</p>
            <p>
              <FaUniversity /> Graphic Era University (BTech CSE '25) <br />
              <FaMapMarkerAlt /> Haldwani, India
            </p>
          </div>
        )}

        {selectedSection === "experience" && (
          <div className="experience-section">
            <h2>Experience</h2>
            <ul>
              <li>💼 PayPal - Software Engineer Intern</li>
              <li>💻 Cehpoint - Application Development Intern</li>
            </ul>
          </div>
        )}

        {selectedSection === "techstack" && (
          <div className="tech-stack">
            <h2>Tech Stack</h2>
            <div className="tech-icons">
              {["flutter", "dart", "java", "android", "firebase", "mysql", "redis", "reactjs"].map((tech) => (
                <img key={tech} src={`/assets/${tech}.png`} alt={tech} className="tech-icon" />
              ))}
            </div>
          </div>
        )}

        {selectedSection === "projects" && (
          <div className="projects-section">
            <h2>Projects</h2>
            <ul>
              <li>🔹 Portfolio Website</li>
              <li>🔹 AI-powered Chest X-ray Classification</li>
            </ul>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="start-menu-footer">
        <div className="social-icons">
          <a href="mailto:sneha25karki@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="social-icon" />
          </a>
          <a href="tel:+917668236690">
            <FaPhone className="social-icon" />
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
