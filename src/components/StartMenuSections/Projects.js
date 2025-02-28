import React, { useState } from "react";
import "../../styles/Projects.css";

const projectsData = [
  {
    title: "Medical AI - Chest X-ray Classification",
    techStack: "Python, TensorFlow, Image Processing",
    date: "January 2024",
    details: [
      "Designed a model trained to distinguish between images showing the presence of a specific medical condition (e.g., atelectasis) and images with no disease.",
      "Implemented Transfer Learning using InceptionV3 to create a CNN model for binary classification."
    ],
  },
  {
    title: "Companion App - Mental Health Tracking App",
    techStack: "Flutter, Firebase, Android Studio",
    date: "June 2023",
    details: [
      "Created an Android application using Dart, Flutter, and Android Studio that provides users with utilities for mental well-being.",
      "Implemented features like water reminder, to-do list, breathing exercises, and therapist booking.",
      "Used Cloud Firestore for real-time data handling and Firebase Authentication for secure login."
    ],
  },
  {
    title: "Font Recognition - Using Machine Learning",
    techStack: "Python, Image Classification",
    date: "January 2023",
    details: [
      "Designed a deep learning model for font detection.",
      "Used a CNN model to classify images into five different font types: Lato, Raleway, Roboto, Sansation, and Walkway.",
      "Implemented image augmentation techniques to diversify the dataset."
    ],
  },
];

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleExpand = (index) => {
    setExpandedProjects((prevState) => ({
      ...prevState,
      [index]: !prevState[index], 
    }));
  };

  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`project-card ${expandedProjects[index] ? "expanded" : ""}`}
            onClick={() => toggleExpand(index)} 
          >
            <button className="expand-btn" onClick={(e) => { 
                e.stopPropagation(); 
                toggleExpand(index);
              }}>
              {expandedProjects[index] ? "▼" : "▶"}
            </button>

            <div className="project-summary">
              <div>
                <div className="project-title">{project.title}</div>
                <div className="tech-stack">{project.techStack}</div>
              </div>
              <div className="project-date">{project.date}</div>
            </div>

            
            <div className={`project-details ${expandedProjects[index] ? "show" : ""}`}>
              <ul>
                {project.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
