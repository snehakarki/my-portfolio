import React, { useEffect, useRef } from "react";
import "../styles/Popup.css"; 

const Popup = ({ onClose }) => {
  const popupRef = useRef(null); 

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
      <div className="popup-container" ref={popupRef}>
        <h2 className="popup-title">✨ Hey there, explorer! ✨</h2>
        <p className="popup-text">
          You’ve just stumbled into my little digital universe—where creativity meets a sprinkle of chaos! 🚀💡
        </p>
        <p className="popup-text">
          I love building things (sometimes with code, sometimes with yarn 🧶), and this space is a peek into my world.
        </p>
        <p className="popup-text">
          Click around, have fun, and maybe, just maybe, you’ll find something cool! 😏
        </p>
        <button className="popup-close-btn" onClick={onClose}>
          🚀 Let’s Go!
        </button>
      </div>
    </div>
  );
};

export default Popup;
