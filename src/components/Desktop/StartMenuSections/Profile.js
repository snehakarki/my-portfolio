import React from "react";
import { FaUniversity, FaMapMarkerAlt, FaYarn, FaPlane, FaPen, FaCode, FaBriefcase } from "react-icons/fa";
import "../../../styles/Profile.css"; 

const Profile = () => {
  return (
    <div className="profile-section">
      <div className="profile-pic-container">
        <img src="./profile.jpg" alt="Sneha Karki" className="profile-pic" />
      </div>
      <h1 className="profile-name">Sneha Karki</h1>
      <p className="current-role">
        <FaBriefcase /> Upcoming Software Engineer @ <strong>PayPal</strong>
      </p>

      <p className="bio">
        I love building apps that solve real problems and exploring AI-driven solutions. 
        Skilled in React, Python, and Flutter, I create seamless, efficient, and intelligent applications.
      </p>

      <div className="education-location">
        <p>
          <FaUniversity className="edu-icon" /> <strong>Graphic Era University</strong> (BTech CSE '25)
        </p>
        <p>
          <FaMapMarkerAlt className="location-icon" /> Hyderabad, India
        </p>
      </div>

      <div className="interests-container">
        <h3>Passions and Pastimes:</h3>
        <div className="interests">
          <div className="interest-item">
            <FaCode className="interest-icon" /> <span>Development</span>
          </div>
          <div className="interest-item">
            <FaYarn className="interest-icon" /> <span>Crocheting</span>
          </div>
          <div className="interest-item">
            <FaPen className="interest-icon" /> <span>Writing</span>
          </div>
          <div className="interest-item">
            <FaPlane className="interest-icon" /> <span>Traveling</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
