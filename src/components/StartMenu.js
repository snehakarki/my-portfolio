import React, { useEffect, useRef } from "react";
import "../styles/StartMenu.css";
import { 
  FaLinkedin, FaInstagram, FaEnvelope, FaPhone, 
  FaMapMarkerAlt, FaUniversity, FaCode, 
  FaPlane, FaYarn, FaPen 
} from "react-icons/fa"; 

const StartMenu = ({ isOpen, onClose }) => {
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
            I love building apps that solve real problems and exploring AI-driven solutions. Skilled in React, Python, and Flutter, I create seamless, efficient, and intelligent applications.
          </p>

          {/* Education & Location Section */}
          <div className="education-location">
            <p>
              <FaUniversity className="edu-icon" /> <strong>Graphic Era University</strong> (BTech CSE '25)
            </p>
            <p>
              <FaMapMarkerAlt className="location-icon" /> Haldwani, India
            </p>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="tech-stack">
        <h3>Tech Stack:</h3>
        <div className="tech-icons">
          {[
            { name: "Flutter", src: "/assets/flutter.png" },
            { name: "Dart", src: "/assets/dart.png" },
            { name: "Java", src: "/assets/java.png" },
            { name: "Android", src: "/assets/android.png" },
            { name: "Firebase", src: "/assets/firebase.png" },
            { name: "MySQL", src: "/assets/mysql.png" },
            { name: "Redis", src: "/assets/redis.png" },
            { name: "React", src: "/assets/reactjs.png" },
          ].map((tech) => (
            <img key={tech.name} src={tech.src} alt={tech.name} className="tech-icon" />
          ))}
        </div>
      </div>

      {/* Interests Section */}
      <div className="interests-container">
        <h3>Passions and Pastimes:</h3>
        <div className="interests">
          {[
            { icon: <FaCode className="interest-icon fa-code" />, label: "Development" },
            { icon: <FaYarn className="interest-icon fa-yarn" />, label: "Crocheting" },
            { icon: <FaPen className="interest-icon fa-pen" />, label: "Writing" },
            { icon: <FaPlane className="interest-icon fa-plane" />, label: "Traveling" },
          ].map((interest, index) => (
            <div className="interest-item" key={index}>
              {interest.icon} <span>{interest.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section with Chat Message & Socials */}
      <div className="start-menu-footer">
        <div className="footer-message">
          <p> Let's Chat about building cool stuff! Reach out and say hi! ☕</p>
        </div>

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
