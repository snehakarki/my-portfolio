import React, { useState, useEffect } from "react";
import Icon from "./Icon";
import Taskbar from "./Taskbar";
import resumeIcon from "../assets/icons/resume_icon.png";
import githubIcon from "../assets/icons/github_icon.png";
import leetcodeIcon from "../assets/icons/leetcode_icon.png";
import "../styles/Desktop.css";

const Desktop = () => {
  const [openWindows, setOpenWindows] = useState([]); 
  const [windowRefs, setWindowRefs] = useState({});

const icons = [
  { id: "resume", name: "Resume", icon: resumeIcon, url: "/resume.pdf" },
  { id: "projects", name: "Github", icon: githubIcon, url: "https://github.com/snehakarki" },
  { id: "leetcode", name: "Leetcode", icon: leetcodeIcon, url: "https://leetcode.com/u/carkey_25/" },
];

  const openWindow = (icon) => {
  
    if (windowRefs[icon.id] && !windowRefs[icon.id].closed) {
      windowRefs[icon.id].focus();
      return;
    }

    const popup = window.open(icon.url, icon.name, "width=800,height=600,left=200,top=100");

    setWindowRefs((prev) => ({ ...prev, [icon.id]: popup }));
    setOpenWindows((prevWindows) =>
      prevWindows.some((win) => win.id === icon.id) ? prevWindows : [...prevWindows, { id: icon.id, name: icon.name, icon: icon.icon }]
    );
  };

  const closeWindow = (id) => {
    if (windowRefs[id]) {
      windowRefs[id].close();
    }
    setWindowRefs((prev) => ({ ...prev, [id]: null }));
  };

  useEffect(() => {
    const checkWindows = () => {
      setOpenWindows((prevWindows) =>
        prevWindows.filter((win) => windowRefs[win.id] && !windowRefs[win.id].closed) 
      );
    };

    window.addEventListener("focus", checkWindows);
    return () => window.removeEventListener("focus", checkWindows);
  }, [windowRefs]);

  
  return (
    <div className="desktop">
      {icons.map((icon) => (
              <Icon 
                key={icon.id} 
                name={icon.name} 
                icon={icon.icon} 
                onDoubleClick={() => openWindow(icon)} 
              />
            ))}
      <Taskbar openWindows={openWindows} onClose={closeWindow} onRestore={openWindow} />
    </div>
  );
};

export default Desktop;
