import React from "react";
import "../styles/StartMenu.css";
import { FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa"; // Importing icons

const StartMenu = ({ isOpen }) => {
  if (!isOpen) return null;

  const techStackIcons = [
    { name: "Flutter", src: "/assets/flutter.png" },
    { name: "Dart", src: "/assets/dart.png" },
    { name: "Java", src: "/assets/java.png" },
    { name: "Android", src: "/assets/android.png" },
    { name: "Firebase", src: "/assets/firebase.png" },
    { name: "MySQL", src: "/assets/mysql.png" },
    { name: "Redis", src: "/assets/redis.png" },
    { name: "React", src: "/assets/reactjs.png" },
    { name: "Node.js", src: "/assets/nodejs.png" },
  ];

  return (
    <div className="start-menu">
      <div className="start-menu-content">
        {/* Left Side: Profile Picture */}
        <div className="start-left">
          <img src="/profile.jpg" alt="Profile" className="profile-pic" />
        </div>

        {/* Right Side: Description */}
        <div className="start-right">
          <h1>Sneha Karki</h1>
          <p className="description">Software Developer | Web & AI Enthusiast</p>
          <p className="about-me">
            A software developer skilled in full-stack development, AI, and mobile apps. I build scalable solutions with React, Python (Tornado), and Flutter, optimizing performance and user experience.
          </p>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="tech-stack">
        <h3>Tech Stack:</h3>
        <div className="tech-icons">
          {techStackIcons.map((tech) => (
            <img key={tech.name} src={tech.src} alt={tech.name} className="tech-icon" />
          ))}
        </div>
      </div>

      {/* Bottom Section with Chat Message & Socials */}
      <div className="start-menu-footer">
        {/* Left Side - Chat Message */}
        <div className="footer-message">
          <p> Let's Chat about building cool stuff! Reach out and say hi! ☕</p>
        </div>

        {/* Right Side - Social Links */}
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
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default StartMenu;
