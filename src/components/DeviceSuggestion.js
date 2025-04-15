import React, { useState } from "react";
import "../styles/DeviceSuggestion.css";

const DeviceSuggestion = ({ isMobile }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="device-suggestion">
      <p>
        {isMobile 
          ? "💻 Try it in desktop!" 
          : "📱 Try it in mobile!"}
      </p>
      <button 
        className="close-suggestion" 
        onClick={() => setIsVisible(false)}
        aria-label="Close suggestion"
      >
        ×
      </button>
    </div>
  );
};

export default DeviceSuggestion; 