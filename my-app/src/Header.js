import React from "react";
import "./Header.css";

function Header({ darkMode, setDarkMode }) {
  return (
    <header className="header">
      <h1 className="header-title">Cybersecurity Learning Dashboard</h1>
      <button
        className="dark-mode-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️" : "🌙"} 
      </button>
    </header>
  );
}

export default Header;
