import React, { useState, useEffect } from "react";
import Icon from "./Icon";
import Taskbar from "./Taskbar";
import resumeIcon from "../assets/icons/resume_icon.png";
import githubIcon from "../assets/icons/github_icon.png";
import leetcodeIcon from "../assets/icons/leetcode_icon.png";
import "../styles/Desktop.css";

const Desktop = () => {
  const [openWindows, setOpenWindows] = useState([]); 

  const icons = [
    { id: 1, name: "Resume", icon: resumeIcon, url: "https://example.com/resume" },
    { id: 2, name: "Projects", icon: githubIcon, url: "https://github.com/snehakarki" },
    { id: 3, name: "Leetcode", icon: leetcodeIcon, url: "https://leetcode.com/u/carkey_25/" },
  ];

  const openWindow = (icon) => {
    setOpenWindows((prevWindows) => {
      const existingWindow = prevWindows.find((win) => win.id === icon.id);
      if (existingWindow) {
        existingWindow.popup?.focus(); 
        return prevWindows;
      }

      const popup = window.open(icon.url, icon.name, "width=800,height=600,left=200,top=100");

      
      const interval = setInterval(() => {
        if (popup.closed) {
          clearInterval(interval);
          closeWindow(icon.id);
        }
      }, 200); 

      return [...prevWindows, { id: icon.id, name: icon.name, icon: icon.icon, popup }];
    });
  };

  const closeWindow = (id) => {
    setOpenWindows((prevWindows) => {
      const targetWindow = prevWindows.find((win) => win.id === id);
      targetWindow?.popup?.close();
      return prevWindows.filter((win) => win.id !== id);
    });
  };

  return (
    <div className="desktop">
      {icons.map((icon) => (
        <div key={icon.id} onDoubleClick={() => openWindow(icon)}>
          <Icon name={icon.name} icon={icon.icon} />
        </div>
      ))}

      {/* Taskbar with docked windows */}
      <Taskbar 
        openWindows={openWindows} 
        onClose={closeWindow} 
        onRestore={openWindow} />
    </div>
  );
};

export default Desktop;
