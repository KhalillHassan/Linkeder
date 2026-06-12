import React from "react";
import "../style/matches-page.css";

function MatchesPage({ connectedProfiles, onDeleteProfile }) {
  if (connectedProfiles.length === 0) {
    return (
      <div className="matches-empty">
        <h2>No matches yet</h2>
        <p>Profiles you connect with will appear here.</p>
      </div>
    );
  }

  return (
    <div className="matches-page">
      <h2 className="matches-title">Your Matches</h2>

      <div className="matches-grid">
        {connectedProfiles.map((profile) => (
          <div className="match-card" key={profile.id}>
            <img className="match-img" src={profile.image} alt={profile.name} />

            <div className="match-info">
              <div className="match-name-row">
                <h3>{profile.name}</h3>
                <span>{profile.age}</span>
              </div>

              <p className="match-job">{profile.job}</p>
              <p className="match-location">{profile.location}</p>

              <div className="match-skills">
                {profile.skills.slice(0, 3).map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>

              <div className="match-actions">
                <button className="match-action-button chat-button">
                  <svg className="match-action-icon" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 6.5C5 4.6 6.6 3 8.5 3H15.5C17.4 3 19 4.6 19 6.5V12.5C19 14.4 17.4 16 15.5 16H10L5.5 20V16H8.5C6.6 16 5 14.4 5 12.5V6.5Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Chat
                </button>

                <button
                  className="match-action-button delete-button"
                  onClick={() => onDeleteProfile(profile.id)}
                >
                  <svg className="match-action-icon" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 7H20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M10 11V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M14 11V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M6 7L7 20H17L18 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 7V4H15V7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MatchesPage;