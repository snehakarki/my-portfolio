import React from "react";
import "../../styles/Mobile/SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-container">
        <span className="google-icon">G</span>
        <span className="search-text">Say "Ok Google"</span>
        <span className="mic-icon">🎤</span>
      </div>
    </div>
  );
};

export default SearchBar; 