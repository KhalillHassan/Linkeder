import React, { useState } from "react";
import "../style/top-navbar.css";

function TopNavbar({ theme, onToggleTheme }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function toggleDropdown() {
    setIsDropdownOpen((prevValue) => !prevValue);
  }

  return (
    <header className="top-navbar">
      <div className="top-navbar-actions">
        <button className="top-icon-button" aria-label="Toggle theme" onClick={onToggleTheme}>
          <svg className="top-icon" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 12.8C19.9 13.3 18.7 13.6 17.4 13.6C12.9 13.6 9.4 10.1 9.4 5.6C9.4 4.3 9.7 3.1 10.2 2C6.1 2.9 3 6.5 3 10.9C3 15.9 7.1 20 12.1 20C16.5 20 20.1 16.9 21 12.8Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          className="top-icon-button notification-button"
          aria-label="Notifications"
        >
          <svg className="top-icon" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 9C18 6 16 4 12 4C8 4 6 6 6 9V13.5L4.5 16.5H19.5L18 13.5V9Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M10 19C10.4 19.7 11.1 20 12 20C12.9 20 13.6 19.7 14 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <span className="notification-dot"></span>
        </button>

        <div className="profile-menu">
          <button className="profile-button" onClick={toggleDropdown}>
            <div className="profile-avatar">K</div>

            <div className="profile-text2">
              <span className="profile-name-top">Khalil</span>
              <span className="profile-role-top">Student</span>
            </div>

            <svg className="chevron-icon" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 10L12 15L17 10"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="profile-dropdown">
              <button className="dropdown-item">My Profile</button>
              <button className="dropdown-item">Edit Profile</button>
              <button className="dropdown-item">Settings</button>
              <div className="dropdown-divider"></div>
              <button className="dropdown-item logout-dropdown">Logout</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default TopNavbar;