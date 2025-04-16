import React, { useState } from "react";
import "../../../styles/Projects.css";

const projectsData = [
  {
    title: "Music Genre Recommendation System",
    techStack: "Python, Librosa, Scikit-learn, XGBoost",
    date: "April 2024",
    details: [
      "Built a machine learning system to classify and recommend music genres using audio features.",
      "Used Librosa for audio preprocessing and feature extraction from the GTZAN dataset.",
      "Applied PCA and heatmaps for data visualization and feature analysis.",
      "Trained multiple models, with XGBoost achieving 90.09% accuracy in genre classification.",
      "Developed a recommendation engine using cosine similarity to suggest similar tracks."
    ],
  },
  {
    title: "Medical AI - Chest X-ray Classification",
    techStack: "Python, Scikit-learn, XGBoost, Matplotlib",
    date: "January 2024",
    details: [
      "Built a binary classification model to detect Atelectasis from chest X-ray images.",
      "Visualized prediction confidence using histograms and analyzed threshold-based performance.",
      "Achieved 94% sensitivity and 72% overall accuracy with an AUC of 0.805.",
      "Used confidence score analysis to understand false positives and false negatives.",
      "Plotted ROC curve and tuned threshold for optimal specificity-sensitivity tradeoff."
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
            className={`desktop-project-card ${expandedProjects[index] ? "expanded" : ""}`}
            onClick={() => toggleExpand(index)} 
          >
            <button className="desktop-expand-btn" onClick={(e) => { 
                e.stopPropagation(); 
                toggleExpand(index);
              }}>
              {expandedProjects[index] ? "▼" : "▶"}
            </button>

            <div className="desktop-project-summary">
              <div>
                <div className="desktop-project-title">{project.title}</div>
                <div className="desktop-ptech-stack">{project.techStack}</div>
              </div>
              <div className="desktop-project-date">{project.date}</div>
            </div>

            
            <div className={`desktop-project-details ${expandedProjects[index] ? "show" : ""}`}>
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
