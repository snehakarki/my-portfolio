import React from "react";
import "../../styles/Mobile/AppGrid.css";

const apps = [
  { id: 1, name: "Phone", icon: "📞" },
  { id: 2, name: "WhatsApp", icon: "💬" },
  { id: 3, name: "Gallery", icon: "🖼️" },
  { id: 4, name: "Camera", icon: "📷" },
];

const AppGrid = () => {
  return (
    <div className="app-grid">
      {apps.map((app) => (
        <div key={app.id} className="app-icon">
          <span>{app.icon}</span>
          <p>{app.name}</p>
        </div>
      ))}
    </div>
  );
};

export default AppGrid;
