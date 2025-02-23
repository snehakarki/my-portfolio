import React, { useState, useRef, useEffect } from "react";
import "../../styles/Experience.css";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    company: "PayPal",
    duration: "May 2024 – Aug 2024",
    role: "Software Engineer Intern",
    location: "Hyderabad, India",
    details: [
      "Built a <strong>cookie banner</strong> for Chargehound (a PayPal service).",
      "Integrated and built <strong>APIs</strong> for the <strong>Redis Queues Management Dashboard</strong> using <strong>Python & Tornado</strong>.",
      "Optimized <strong>searching & filtering logic</strong> for the dashboard, improving efficiency by <strong>80%</strong>.",
      "Developed the front-end using <strong>ReactJS</strong> for smooth user interaction.",
      "Implemented <strong>unit tests</strong> for Python APIs, achieving <strong>86% code coverage</strong>.",
    ],
  },
  {
    company: "Cehpoint E-Learning",
    duration: "Sept 2023 – Dec 2023",
    role: "Application Development Intern",
    location: "Remote",
    details: [
      "Developed the <strong>food domain</strong> for the <strong>Thaiseva app</strong>, integrating <strong>car booking, hotel reservations, and food ordering</strong>.",
      "Used <strong>Dart & Flutter</strong> for a responsive front-end.",
      "Managed the <strong>Firebase database</strong> for smooth data storage and retrieval.",
      "Integrated <strong>Google Maps API</strong> for location tracking.",
      "Implemented <strong>Instamojo</strong> for secure payments, improving user experience.",
      "Developed a <strong>restaurant portal</strong> for eateries to register and showcase dishes.",
    ],
  },
];

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const contentRefs = useRef([]); 

  useEffect(() => {
    experiences.forEach((_, index) => {
      if (contentRefs.current[index]) {
        const content = contentRefs.current[index];
        if (expandedIndex === index) {
          content.style.height = content.scrollHeight + "px"; 
        } else {
          content.style.height = "0px";
        }
      }
    });
  }, [expandedIndex]);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="experience-section">
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className={`experience-card ${expandedIndex === index ? "expanded" : ""}`}>
          {/* Expand/Collapse Arrow Button */}
          <button className="expand-btn" onClick={() => toggleExpand(index)}>
            {expandedIndex === index ? "▼" : "▶"}
          </button>

          {/* Unhovered View */}
          <div className="experience-summary" onClick={() => toggleExpand(index)}>
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
            <div
              className="experience-details"
              ref={(el) => (contentRefs.current[index] = el)}
            >
              <ul>
                {exp.details.map((point, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: point }}></li>
                ))}
              </ul>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
