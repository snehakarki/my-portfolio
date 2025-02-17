import React from "react";
import "../styles/StartMenu.css";

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
          <p className="description">
            Software Developer | Web & AI Enthusiast
          </p>
          <p className="about-me">
            I specialize in Full Stack Development, AI/ML, and building efficient, high-performance applications. Currently exploring new technologies to enhance my skill set.
          </p>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="tech-stack">
        <h3>Tech Stack: </h3>
        <div className="tech-icons">
          {techStackIcons.map((tech) => (
            <img key={tech.name} src={tech.src} alt={tech.name} className="tech-icon" />
          ))}
        </div>
      </div>

      {/* Bottom Section with Contact Info */}
      <div className="start-menu-footer">
        <div className="contact-info">
          <p>Email: <a href="mailto:sneha25karki@gmail.com">sneha25karki@gmail.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a></p>
          <p>Instagram: <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">instagram.com/yourprofile</a></p>
        </div>
      </div>
    </div>
  );
};

export default StartMenu;
