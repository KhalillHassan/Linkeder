import React from "react";
import "../style/sidebar.css";

function SideBar({ activePage, setActivePage }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <svg className="logo-icon" viewBox="0 0 24 24" fill="none">
          <path
            d="M16 11C17.66 11 19 9.66 19 8C19 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M8 11C9.66 11 11 9.66 11 8C11 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M2.5 19C3.2 16.7 5.3 15 8 15C10.7 15 12.8 16.7 13.5 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M10.5 19C11.2 16.7 13.3 15 16 15C18.7 15 20.8 16.7 21.5 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        <span>Linkeder</span>
      </div>

      <nav className="sidebar-nav">
        <button className={`sidebar-link ${activePage === "discover" ? "active" : ""}`}
  onClick={() => setActivePage("discover")}>
          <svg className="sidebar-icon" viewBox="0 0 24 24" fill="none">
            <circle
              cx="12"
              cy="12"
              r="9"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M15.5 8.5L13.5 13.5L8.5 15.5L10.5 10.5L15.5 8.5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
          <span>Discover</span>
        </button>

        <button className={`sidebar-link ${activePage === "matches" ? "active" : ""}`}
  onClick={() => setActivePage("matches")}>
          <svg className="sidebar-icon" viewBox="0 0 24 24" fill="none">
            <path
              d="M20.5 8.5C20.5 13.5 12 19 12 19C12 19 3.5 13.5 3.5 8.5C3.5 5.9 5.4 4 7.8 4C9.2 4 10.5 4.7 12 6.3C13.5 4.7 14.8 4 16.2 4C18.6 4 20.5 5.9 20.5 8.5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
          <span>Matches</span>
        </button>

        <button className={`sidebar-link ${activePage === "profile" ? "active" : ""}`}
  onClick={() => setActivePage("profile")}>
          <svg className="sidebar-icon" viewBox="0 0 24 24" fill="none">
            <circle
              cx="12"
              cy="8"
              r="4"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M4 20C4.8 16.8 7.8 15 12 15C16.2 15 19.2 16.8 20 20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span>Profile</span>
        </button>
      </nav>

      <div className="sidebar-bottom">
        <button className="sidebar-link logout-link">
          <svg className="sidebar-icon" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 17L20 12L15 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 12H9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M11 20H5C3.9 20 3 19.1 3 18V6C3 4.9 3.9 4 5 4H11"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default SideBar;
