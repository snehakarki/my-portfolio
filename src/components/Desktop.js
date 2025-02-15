import React from "react";
import Icon from "./Icon";
import Taskbar from "./Taskbar";
import resumeIcon from "../assets/icons/resume_icon.png"; 
import "../styles/Desktop.css";

const Desktop = () => {
  const icons = [
    { id: 1, name: "Resume", icon: resumeIcon }, 
    { id: 2, name: "Projects", icon: resumeIcon }, 
    { id: 3, name: "Contact", icon: resumeIcon }
];


  return (
    <div className="desktop">
      {icons.map((item) => (
        <Icon key={item.id} name={item.name} icon={item.icon} />
      ))}
      <Taskbar />
    </div>
  );
};

export default Desktop;
