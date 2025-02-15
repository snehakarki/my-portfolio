import React from "react";
import Icon from "./Icon";
import Taskbar from "./Taskbar";
import resumeIcon from "../assets/icons/resume_icon.png"; 
import githubIcon from "../assets/icons/github_icon.png"; 
import leetcodeIcon from "../assets/icons/leetcode_icon.png"; 
import "../styles/Desktop.css";

const Desktop = () => {
  const icons = [
    { id: 1, name: "Resume", icon: resumeIcon }, 
    { id: 2, name: "GitHub", icon: githubIcon}, 
    { id: 3, name: "Leetcode", icon: leetcodeIcon }
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
