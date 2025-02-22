import React from "react";
import "../../styles/StartMenu.css"; 

const TechStack = () => {
  const techStack = ["flutter", "dart", "java", "android", "firebase", "mysql", "redis", "reactjs"];

  return (
    <div className="tech-stack">
      <h2>Tech Stack</h2>
      <div className="tech-icons">
        {techStack.map((tech) => (
          <img key={tech} src={`/assets/${tech}.png`} alt={tech} className="tech-icon" />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
