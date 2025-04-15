import React from "react";
import "../../styles/Mobile/SearchBar.css";
import { FaMicrophone } from "react-icons/fa";

const SearchBar = ({ onSearchTap }) => {
  return (
    <div className="search-bar">
      <div className="search-container" onClick={onSearchTap}>
        <span className="google-icon">G</span>
        <span className="search-text">Say "hello"</span>
        <span className="mic-icon"><FaMicrophone /></span>
      </div>
    </div>
  );
};

export default SearchBar; 