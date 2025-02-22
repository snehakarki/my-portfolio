import React from "react";
import { FaUniversity, FaMapMarkerAlt } from "react-icons/fa";
import "../../styles/StartMenu.css";

const Profile = () => {
  return (
    <div className="profile-section">
      <img src="/profile.jpg" alt="Profile" className="profile-pic" />
      <h1>Sneha Karki</h1>
      <p>Software Developer | Web & AI Enthusiast</p>
      <p>
        <FaUniversity /> Graphic Era University (BTech CSE '25) <br />
        <FaMapMarkerAlt /> Haldwani, India
      </p>
    </div>
  );
};

export default Profile;
