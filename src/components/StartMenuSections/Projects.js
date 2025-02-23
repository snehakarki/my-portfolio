import React, { useState } from "react";
import "../../styles/Projects.css";

const projects = [
  {
    title: "Medical AI - Chest X-ray Classification",
    date: "January 2024",
    techStack: ["Python", "TensorFlow", "Image Processing"],
    description: [
      "Designed a model trained to distinguish between images showing the presence of a specific medical condition (e.g., atelectasis) and images with no disease.",
      "Implemented Transfer Learning to create a CNN model for binary classification based on a pretrained model, InceptionV3."
    ]
  },
  {
    title: "Companion App - Mental Health Tracking",
    date: "June 2023",
    techStack: ["Flutter", "Firebase", "Android Studio"],
    description: [
      "Created an Android application that provides users with basic utilities to maintain their mental well-being.",
      "Implemented features like water reminders, to-do lists, breathing exercises, and therapist booking.",
      "Integrated Cloud Firestore for real-time data and authentication services."
    ]
  },
  {
    title: "Font Recognition - Using Machine Learning",
    date: "January 2023",
    techStack: ["Image Classification", "Deep Learning", "CNN"],
    description: [
      "Designed a deep learning model for font detection.",
      "Developed a CNN model to classify an image into one of five different font types: Lato, Raleway, Roboto, Sansation, and Walkway.",
      "Applied image augmentation methods to diversify the dataset."
    ]
  }
];

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${expandedIndex === index ? "expanded" : ""}`}
            onClick={() => toggleExpand(index)}
          >
            <button className="expand-btn">{expandedIndex === index ? "▼" : "▶"}</button>
            <div className="project-summary">
              <div className="left">
                <h3 className="project-title">{project.title}</h3>
              </div>
              <div className="right">
                <p className="project-date">{project.date}</p>
              </div>
            </div>
            <p className="ptech-stack">{project.techStack.join(" | ")}</p>
            <div className="project-details">
              <ul>
                {project.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
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
