import React from "react";
import "../../styles/Techstack.css"; 

const techStack = [
  { name: "Flutter", file: "flutter.png" },
  { name: "Dart", file: "dart.png" },
  { name: "Java", file: "java.png" },
  { name: "Android Development", file: "android.png" },
  { name: "Firebase", file: "firebase.png" },
  { name: "MySQL", file: "mysql.png" },
  { name: "Redis", file: "redis.png" },
  { name: "React.js", file: "reactjs.png" }
];

const TechStack = () => {
  return (
    <div className="tech-stack">
      <h2>Tech Stack</h2>
      <div className="tech-container">
        {techStack.map((tech) => (
          <div key={tech.name} className="tech-box">
            <img src={`/assets/${tech.file}`} alt={tech.name} className="tech-icon" />
            <p className="tech-name">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
