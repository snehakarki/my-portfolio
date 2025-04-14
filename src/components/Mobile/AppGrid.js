import React from "react";
import "../../styles/Mobile/AppGrid.css";
import linkedinIcon from "../../assets/icons/linkedin_icon.png";
import githubIcon from "../../assets/icons/github_icon.png";
import pdfIcon from "../../assets/icons/pdf_icon.png";
import mailicon from "../../assets/icons/gmail_icon.png";

const apps = [
  { id: 1, name: "LinkedIn", icon: linkedinIcon },
  { id: 2, name: "GitHub", icon: githubIcon },
  { id: 3, name: "Resume", icon: pdfIcon },
  { id: 4, name: "Email", icon: mailicon },
];

const AppGrid = () => {
  return (
    <div className="app-container">
      <div className="search-container">
        <span className="google-icon">G</span>
        <span className="search-text">Google Search</span>
        <span className="mic-icon">🎤</span>
      </div>
      <div className="app-grid">
        {apps.map((app) => (
          <div key={app.id} className="app-icon">
            <img src={app.icon} alt={app.name} />
            <p>{app.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppGrid;
