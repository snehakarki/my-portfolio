import React, { useState, useEffect } from "react";
import "../../styles/Mobile/TopBar.css";

const TopBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;
    const hourStr = hours < 10 ? `0${hours}` : `${hours}`;
    const minuteStr = minutes < 10 ? `0${minutes}` : `${minutes}`;

    return (
      <>
        <span className="hour">{hourStr}</span>
        <span className="time-separator">:</span>
        <span className="minute">{minuteStr}</span>
        <span className="period">{period}</span>
      </>
    );
  };

  const formatDate = (date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    return `${dayName}, ${day} ${month}`;
  };

  return (
    <div className="top-bar">
      <div className="time-date-section">
        <div className="time">{formatTime(time)}</div>
        <div className="date">{formatDate(time)}</div>
      </div>
      <div className="weather">
        <span className="temp">9°</span>
        <span className="weather-icon">☁️</span>
      </div>
    </div>
  );
};

export default TopBar;
