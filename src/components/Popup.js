import React, { useEffect, useRef, useState } from "react";
import "../styles/Popup.css"; 

const Popup = ({ onClose }) => {
  const popupRef = useRef(null);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="popup-overlay">
      <div className={`popup-container ${showMessage ? "message-mode" : ""}`} ref={popupRef}>
        {!showMessage ? (
          <img
            src="./image.png" 
            className="popup-meme"
            alt="meme"
            onClick={() => setShowMessage(true)}
          />
        ) : (
          <div className="popup-message">
            <h2 className="popup-title">👀 Oops, you caught me!</h2>
            <p className="popup-text">
              Typing furiously, explaining things (mostly to myself)... welcome to my organized chaos! 🚀💻  
            </p>
            <p className="popup-text">
              If you spot a bug… shhh, it's a feature. 😉🐞  
            </p>
            <button className="popup-close-btn" onClick={onClose}>
              🚀 Got it, time to explore!
            </button>
          </div>

        )}
      </div>
    </div>
  );
};

export default Popup;
