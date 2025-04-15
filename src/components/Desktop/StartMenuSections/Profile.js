import React from "react";
import { FaUniversity, FaMapMarkerAlt, FaYarn, FaPlane, FaPen, FaCode, FaBriefcase } from "react-icons/fa";
import "../../../styles/Profile.css"; 

const Profile = () => {
  return (
    <div className="profile-section">
      <div className="desktop-profile-pic-container">
        <img src="./profile.jpg" alt="Sneha Karki" className="desktop-profile-pic" />
      </div>
      <h1 className="desktop-profile-name">Sneha Karki</h1>
      <p className="desktop-current-role">
        <FaBriefcase /> Upcoming Software Engineer @ <strong>PayPal</strong>
      </p>

      <p className="desktop-bio">
        I love building apps that solve real problems and exploring AI-driven solutions. 
        Skilled in React, Python, and Flutter, I create seamless, efficient, and intelligent applications.
      </p>

      <div className="desktop-education-location">
        <p>
          <FaUniversity className="desktop-edu-icon" /> <strong>Graphic Era University</strong> (BTech CSE '25)
        </p>
        <p>
          <FaMapMarkerAlt className="desktop-location-icon" /> Hyderabad, India
        </p>
      </div>

      <div className="desktop-interests-container">
        <h3>Passions and Pastimes:</h3>
        <div className="desktop-interests">
          <div className="desktop-interest-item">
            <FaCode className="interest-icon" /> <span>Development</span>
          </div>
          <div className="desktop-interest-item">
            <FaYarn className="interest-icon" /> <span>Crocheting</span>
          </div>
          <div className="desktop-interest-item">
            <FaPen className="interest-icon" /> <span>Writing</span>
          </div>
          <div className="desktop-interest-item">
            <FaPlane className="interest-icon" /> <span>Traveling</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
