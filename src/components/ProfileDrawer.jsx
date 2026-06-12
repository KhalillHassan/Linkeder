import React from "react";
import "../style/profile-drawer.css";

function ProfileDrawer({ profile, onClose, onConnect  }) {
  if (!profile) return null;

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <aside className="profile-drawer" onClick={(event) => event.stopPropagation()}>
        <button className="drawer-close" onClick={onClose} aria-label="Close drawer">
          <svg className="drawer-close-icon" viewBox="0 0 24 24" fill="none">
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

        <div className="drawer-hero">
          <img className="drawer-img" src={profile.image} alt={profile.name} />
          <span className="drawer-match">{profile.match} Match</span>
        </div>

        <div className="drawer-content">
          <div className="drawer-header">
            <div>
              <div className="drawer-name-row">
                <h2 className="drawer-name">{profile.name}</h2>
                <span className="drawer-age">{profile.age}</span>
              </div>

              <p className="drawer-job">{profile.job}</p>
              <p className="drawer-location">{profile.location}</p>
            </div>

            <button className="drawer-connect-button" onClick={onConnect}>
              Connect
            </button>
          </div>

          <section className="drawer-section">
            <h3 className="drawer-section-title">About</h3>
            <p className="drawer-section-text">
              {profile.about || profile.description}
            </p>
          </section>

          <section className="drawer-section">
            <h3 className="drawer-section-title">Skills</h3>

            <div className="drawer-skills">
              {profile.skills.map((skill) => (
                <span className="drawer-skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section className="drawer-section">
            <h3 className="drawer-section-title">Looking for</h3>
            <p className="drawer-section-text">
              {profile.lookingFor || "Creative collaborators, strong communication, and meaningful project opportunities."}
            </p>
          </section>

          <section className="drawer-section">
            <h3 className="drawer-section-title">Projects</h3>

            <div className="drawer-projects">
              {(profile.projects || []).map((project) => (
                <div className="drawer-project-card" key={project.title}>
                  <div className="drawer-project-top">
                    <h4>{project.title}</h4>
                    <span>{project.year}</span>
                  </div>

                  <p>{project.description}</p>

                  <div className="drawer-project-tools">
                    {project.tools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </aside>
    </div>
  );
}

export default ProfileDrawer;