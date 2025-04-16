import React, { useState } from "react";
import "../../styles/Mobile/ProjectModal.css";

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

const ProjectModal = ({ isOpen, onClose }) => {
  const [expandedProjects, setExpandedProjects] = useState({});

  if (!isOpen) return null;

  const toggleExpand = (index) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Projects</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="projects-container">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`project-card ${expandedProjects[index] ? "expanded" : ""}`}
              onClick={() => toggleExpand(index)}
            >
              <div className="project-summary">
                <div>
                  <div className="project-title">{project.title}</div>
                  <div className="tech-stack">{project.techStack}</div>
                </div>
                <div className="project-date">{project.date}</div>
              </div>
              
              {expandedProjects[index] && (
                <div className="project-details">
                  <ul>
                    {project.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal; 