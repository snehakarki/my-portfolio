import React, { useState, useEffect } from "react";
import "../../styles/Mobile/TopBar.css";

const TopBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="top-bar">
      <div className="time">{time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</div>
      <div className="date">{time.toDateString()}</div>
      <div className="weather">☀️ 16°C</div> {/* Replace with API if needed */}
    </div>
  );
};

export default TopBar;
