import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import profiles from "../data/profiles";
import ProfileDrawer from "./ProfileDrawer";
import "../style/profile-list.css";

function ProfileList({ onConnectProfile }) {
  const [currentIndex, setCurrentIndex] = useState(() => {
    const savedIndex = localStorage.getItem("linkeder-current-index");

    if (savedIndex !== null) {
      const parsedIndex = Number(savedIndex);

      if (!Number.isNaN(parsedIndex) && parsedIndex >= 0) {
        return parsedIndex;
      }
    }

    return 0;
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [connectMessage, setConnectMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("linkeder-current-index", currentIndex);
  }, [currentIndex]);

  const currentProfile = profiles[currentIndex];

  function goToNextProfile() {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  }

  function restartProfiles() {
    setCurrentIndex(0);
  }

  function handlePass() {
    goToNextProfile();
  }

  function handleConnect() {
    onConnectProfile(currentProfile);

    setConnectMessage(`Connected with ${currentProfile.name}`);
    setIsDrawerOpen(false);
    goToNextProfile();

    setTimeout(() => {
      setConnectMessage("");
    }, 1500);
  }

  if (!currentProfile) {
    return (
      <div className="empty-state">
        <h2 className="empty-title">No more profiles</h2>

        <p className="empty-description">
          You reached the end of the profile deck. Start again to review the
          profiles from the beginning.
        </p>

        <button className="restart-button" onClick={restartProfiles}>
          Restart profiles
        </button>
      </div>
    );
  }

  const leftProfile =
    profiles[currentIndex - 1] || profiles[profiles.length - 1];

  const rightProfile = profiles[currentIndex + 1];

  return (
    <div className="profile-stack">
      <div className="profile-deck">
        {leftProfile && (
          <div className="deck-card deck-card-left">
            <ProfileCard
              image={leftProfile.image}
              match={leftProfile.match}
              name={leftProfile.name}
              age={leftProfile.age}
              job={leftProfile.job}
              location={leftProfile.location}
              skills={leftProfile.skills}
              description={leftProfile.description}
            />
          </div>
        )}

        <div
          className="deck-card deck-card-main"
          onClick={() => setIsDrawerOpen(true)}
        >
          <ProfileCard
            image={currentProfile.image}
            match={currentProfile.match}
            name={currentProfile.name}
            age={currentProfile.age}
            job={currentProfile.job}
            location={currentProfile.location}
            skills={currentProfile.skills}
            description={currentProfile.description}
          />
        </div>

        {rightProfile && (
          <div className="deck-card deck-card-right">
            <ProfileCard
              image={rightProfile.image}
              match={rightProfile.match}
              name={rightProfile.name}
              age={rightProfile.age}
              job={rightProfile.job}
              location={rightProfile.location}
              skills={rightProfile.skills}
              description={rightProfile.description}
            />
          </div>
        )}
      </div>

      <div className="profile-actions">
        <div className="action-item">
          <button
            className="action-button pass-button"
            aria-label="Pass"
            onClick={handlePass}
          >
            <svg className="action-icon" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <span className="action-label">Pass</span>
        </div>

        <div className="action-item">
          <button
            className="action-button connect-button"
            aria-label="Connect"
            onClick={handleConnect}
          >
            <svg className="action-icon" viewBox="0 0 24 24" fill="none">
              <path
                d="M20.5 8.5C20.5 13.5 12 19 12 19C12 19 3.5 13.5 3.5 8.5C3.5 5.9 5.4 4 7.8 4C9.2 4 10.5 4.7 12 6.3C13.5 4.7 14.8 4 16.2 4C18.6 4 20.5 5.9 20.5 8.5Z"
                fill="currentColor"
              />
            </svg>
          </button>

          <span className="action-label">Connect</span>
        </div>
      </div>

      {isDrawerOpen && (
        <ProfileDrawer
          profile={currentProfile}
          onClose={() => setIsDrawerOpen(false)}
          onConnect={handleConnect}
        />
      )}

      {connectMessage && (
        <div className="connect-toast">{connectMessage}</div>
      )}
    </div>
  );
}

export default ProfileList;