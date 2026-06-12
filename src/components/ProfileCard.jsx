import React from "react";
import "../style/profile-card.css";

function ProfileCard(props) {
  return (
    <div className="profile-card">
      <div className="profile-image-area">
        <img className="profile-img" src={props.image} />
        <span className="profile-badge">{props.match}</span>
      </div>

      <div className="profile-text">
        <div className="profile-header">
          <h2 className="profile-name">{props.name}</h2>
          <span>{props.age}</span>
        </div>
        <p className="profile-job">{props.job}</p>
        <p className="profile-location">{props.location}</p>
        <div className="skills">
          {props.skills.map((skill) => (
            <span className="skill-tag">{skill}</span>
          ))}
        </div>
        <div className="profile-side-info">
          <p className="profile-description">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
