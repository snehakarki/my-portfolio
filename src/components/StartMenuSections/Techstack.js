import React from "react";
import "../../styles/Techstack.css"; 

const TechStack = () => {
  const techStack = [
    { name: "C++", img: "c++.png", usedIn: "College CourseWork" },
    { name: "C", img: "C.png", usedIn: "College CourseWork" },
    { name: "Java", img: "java.png", usedIn: "College CourseWork" },
    { name: "Dart", img: "dart.png", usedIn: "Thaiseva App (Cehpoint)" },
    { name: "Python", img: "python.png", usedIn: "PayPal Intern Project" },
    { name: "Flutter", img: "flutter.png", usedIn: "Thaiseva App (Cehpoint)" },
    { name: "React.js", img: "reactjs.png", usedIn: "Portfolio Website" },
    { name: "TensorFlow", img: "tensorflow.png", usedIn: "Image Processing Projects" },
    { name: "Redis", img: "redis.png", usedIn: "PayPal Intern Project" },
    { name: "Firebase", img: "firebase.png", usedIn: "Thaiseva App (Cehpoint)" },
    { name: "MySQL", img: "mysql.png", usedIn: "Paypal Intern Project" },
    { name: "Android Development", img: "android.png", usedIn: "Thaiseva App (Cehpoint)"},
  ];

  return (
    <div className="tech-stack">
      <h2>Tech Stack</h2>
      <div className="tech-container">
        {techStack.map((tech) => (
          <div key={tech.name} className="tech-box">
            <img src={`./assets/${tech.img}`} alt={tech.name} className="tech-icon" />
            <div className="tech-info">
              <p className="tech-name">{tech.name}</p>
              <p className="tech-project">{tech.usedIn}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
