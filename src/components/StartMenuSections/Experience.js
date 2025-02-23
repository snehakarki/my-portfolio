import React, { useState } from "react";
import "../../styles/Experience.css";
import { FaBriefcase } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; 

const experiences = [
  {
    company: "PayPal",
    duration: "May 2024 – Aug 2024",
    role: "Software Engineer Intern",
    location: "Hyderabad, India",
    details: [
      "Built a cookie banner for Chargehound (a PayPal service).",
      "Integrated and built APIs for the Redis Queues Management Dashboard using Python & Tornado.",
      "Optimized searching & filtering logic for the dashboard, improving efficiency by 80%.",
      "Developed the front-end using ReactJS for smooth user interaction.",
      "Implemented unit tests for Python APIs, achieving 86% code coverage.",
    ],
  },
  {
    company: "Cehpoint E-Learning",
    duration: "Sept 2023 – Dec 2023",
    role: "Application Development Intern",
    location: "Remote",
    details: [
      "Developed the food domain for the Thaiseva app, integrating car booking, hotel reservations, and food ordering.",
      "Used Dart & Flutter for a responsive front-end.",
      "Managed the Firebase database for smooth data storage and retrieval.",
      "Integrated Google Maps API for location tracking.",
      "Implemented Instamojo for secure payments, improving user experience.",
      "Developed a restaurant portal for eateries to register and showcase dishes.",
    ],
  },
];

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="experience-section">
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div 
          key={index} 
          className={`experience-card ${expandedIndex === index ? "expanded" : ""}`} 
          onClick={() => toggleExpand(index)} 
        >
          <div className="expand-btn">
            {expandedIndex === index ? <FaChevronUp /> : <FaChevronDown />}
          </div>

          {/* Unhovered View */}
          <div className="experience-summary">
            <div className="left">
              <FaBriefcase className="experience-icon" />
              <div className="experience-detail">
                <h3 className="company-name">{exp.company}</h3>
                <p className="role">{exp.role}</p>
              </div>
            </div>
            <div className="right">
              <p className="location">{exp.location}</p>
              <p className="duration">{exp.duration}</p>
            </div>
          </div>

          {/* Expanded View */}
          {expandedIndex === index && (
            <div className="experience-details">
              <ul>
                {exp.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Experience;
