import React, { useState, useEffect, useRef } from "react";
import "../styles/StartMenu.css";
import { 
  FaUser, FaLaptopCode, FaTools, 
  FaBook, FaProjectDiagram, FaEnvelope
} from "react-icons/fa"; 

const StartMenu = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState("experience");
  const [isExpanded, setIsExpanded] = useState(false);
  const menuRef = useRef(null);

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
      <div 
        className={`start-left-sidebar ${isExpanded ? "expanded" : ""}`} 
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {[
          { icon: <FaUser />, label: "About", section: "about" },
          { icon: <FaLaptopCode />, label: "Tech Stack", section: "techStack" },
          { icon: <FaTools />, label: "Experience", section: "experience" },
          { icon: <FaBook />, label: "Education", section: "education" },
          { icon: <FaProjectDiagram />, label: "Projects", section: "projects" },
          { icon: <FaEnvelope />, label: "Contact", section: "contact" },
        ].map((item) => (
          <div 
            key={item.section} 
            className={`sidebar-item ${activeSection === item.section ? "active" : ""}`}
            onClick={() => setActiveSection(item.section)}
          >
            {item.icon} <span>{item.label}</span>
          </div>
        ))}
      </div>

      {/* Right Content Section */}
      <div className="start-right">
        {activeSection === "about" && (
          <div>
            <h1>Sneha Karki</h1>
            <p>Software Engineer | Web & AI Enthusiast</p>
          </div>
        )}
        {activeSection === "techStack" && (
          <div>
            <h2>Tech Stack</h2>
            <div className="tech-icons">
              {["React", "Node.js", "Flutter", "Python", "Redis"].map((tech) => (
                <div key={tech} className="tech-item">{tech}</div>
              ))}
            </div>
          </div>
        )}
        {activeSection === "experience" && (
          <div>
            <h2>Experience</h2>
            <p>Software Engineer at PayPal (Upcoming)</p>
            <p>Intern at PayPal & CEHPoint</p>
          </div>
        )}
        {activeSection === "education" && (
          <div>
            <h2>Education</h2>
            <p>BTech CSE, Graphic Era University (2025)</p>
          </div>
        )}
        {activeSection === "projects" && (
          <div>
            <h2>Projects</h2>
            <p>AI-powered Chest X-Ray Classification, Portfolio Desktop UI</p>
          </div>
        )}
        {activeSection === "contact" && (
          <div>
            <h2>Contact</h2>
            <p>Email: sneha25karki@gmail.com</p>
            <p>LinkedIn: linkedin.com/in/sneha-k-82aa751ba</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StartMenu;
