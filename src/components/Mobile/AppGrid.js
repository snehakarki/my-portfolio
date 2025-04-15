import React, { useState } from "react";
import "../../styles/Mobile/AppGrid.css";
import linkedinIcon from "../../assets/icons/linkedin_icon.png";
import githubIcon from "../../assets/icons/github_icon.png";
import pdfIcon from "../../assets/icons/pdf_icon.png";
import mailicon from "../../assets/icons/gmail_icon.png";
import ProjectModal from "./ProjectModal";
import SearchBar from "./SearchBar";
import { FaSearch } from "react-icons/fa";

const apps = [
  { id: 1, name: "LinkedIn", icon: linkedinIcon, link: "https://www.linkedin.com/in/sneha-k-82aa751ba/" },
  { id: 2, name: "GitHub", icon: githubIcon, link: "https://github.com/snehakarki" },
  { id: 3, name: "Resume", icon: pdfIcon, link: "/resume.pdf" },
  { id: 4, name: "Email", icon: mailicon, link: "mailto:sneha25karki@gmail.com" },
];

// Fun responses for different search queries
const searchResponses = {
  "hello": "👋 Hi there! Let's explore recent searches!",
  "who are you": "I'm Sneha Karki's portfolio assistant! Ask me about her skills, projects, or experience.",
  "skills": "Sneha is skilled in React, JavaScript, Python, and more! Check out her projects to see her work.",
  "projects": "Here are my projects! Take a look at what I've been working on.",
  "experience": "Sneha has experience in web development, mobile apps, machine learning and more. Check out her resume for details.",
  "contact": "You can reach Sneha through LinkedIn, GitHub, or by email at sneha25karki@gmail.com. Just tap on the respective icons below!",
  "default": "I'm not sure about that. Try asking about skills, projects, or experience!"
};

const AppGrid = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResponse, setSearchResponse] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  const handleSearchTap = () => {
    setSearchActive(true);
    setSearchResponse("");
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") return;
    
    setIsTyping(true);
    
    // Simulate thinking/typing
    setTimeout(() => {
      // Find a matching response or use default
      let response = searchResponses.default;
      let shouldShowProjects = false;
      
      for (const [key, value] of Object.entries(searchResponses)) {
        if (searchQuery.toLowerCase().includes(key.toLowerCase())) {
          response = value;
          if (key === "projects") {
            shouldShowProjects = true;
          }
          break;
        }
      }
      
      setSearchResponse(response);
      setIsTyping(false);
      
      // Show projects modal if the query was about projects
      if (shouldShowProjects) {
        setTimeout(() => {
          setShowProjects(true);
        }, 500);
      }
    }, 1000);
  };

  const handleCloseSearch = () => {
    setSearchActive(false);
    setSearchQuery("");
    setSearchResponse("");
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setIsTyping(true);
    
    // Simulate thinking/typing
    setTimeout(() => {
      let response = searchResponses.default;
      let shouldShowProjects = false;
      
      if (suggestion.toLowerCase() === "projects") {
        response = searchResponses.projects;
        shouldShowProjects = true;
      } else {
        for (const [key, value] of Object.entries(searchResponses)) {
          if (suggestion.toLowerCase() === key.toLowerCase()) {
            response = value;
            break;
          }
        }
      }
      
      setSearchResponse(response);
      setIsTyping(false);
      
      // Show projects modal if the suggestion was "Projects"
      if (shouldShowProjects) {
        setTimeout(() => {
          setShowProjects(true);
        }, 500);
      }
    }, 1000);
  };

  const handleSearchInputChange = (e) => {
    const newValue = e.target.value;
    setSearchQuery(newValue);
    
    // If the search input is cleared, reset to show suggestions
    if (newValue === "") {
      setSearchResponse("");
      setIsTyping(false);
    }
  };

  const handleAppClick = (app) => {
    if (app.link) {
      window.open(app.link, '_blank');
    }
  };

  return (
    <div className="app-container">
      {!searchActive ? (
        <SearchBar onSearchTap={handleSearchTap} />
      ) : (
        <div className="search-active-container">
          <div className="search-header">
            <span className="google-icon">G</span>
            <form onSubmit={handleSearchSubmit} className="search-form">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchInputChange}
                placeholder="Say hello"
                autoFocus
                className="search-input"
              />
            </form>
            <button className="close-button" onClick={handleCloseSearch}>×</button>
          </div>
          
          {searchResponse && (
            <div className="search-response">
              <p>{searchResponse}</p>
            </div>
          )}
          
          {isTyping && (
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
          
          {!searchResponse && !isTyping && (
            <div className="search-suggestions">
              <p className="recent-searches-text">Recent searches</p>
              <div className="search-suggestions-grid">
                <div className="suggestion-item" onClick={() => handleSuggestionClick("Skills")}>
                  <span className="magnifying-glass"><FaSearch /></span>
                  <span>Skills</span>
                </div>
                <div className="suggestion-item" onClick={() => handleSuggestionClick("Projects")}>
                  <span className="magnifying-glass"><FaSearch /></span>
                  <span>Projects</span>
                </div>
                <div className="suggestion-item" onClick={() => handleSuggestionClick("Experience")}>
                  <span className="magnifying-glass"><FaSearch /></span>
                  <span>Experience</span>
                </div>
                <div className="suggestion-item" onClick={() => handleSuggestionClick("Contact")}>
                  <span className="magnifying-glass"><FaSearch /></span>
                  <span>Contact</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      
      <div className="app-grid">
        {apps.map((app) => (
          <div 
            key={app.id} 
            className="app-icon" 
            onClick={() => handleAppClick(app)}
          >
            <img src={app.icon} alt={app.name} />
            <p>{app.name}</p>
          </div>
        ))}
      </div>
      
      <ProjectModal isOpen={showProjects} onClose={() => setShowProjects(false)} />
    </div>
  );
};

export default AppGrid;
