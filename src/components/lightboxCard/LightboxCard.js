import React from "react";
import "./LightboxCard.scss";
import InlineSoftwareSkill from "../inlineSoftwareSkill/InlineSoftwareSkill";

export default function LightboxCard({cardInfo, isDark, onCardClick, isXL}) {
  function getContainerClass() {
    let name = "card-info";
    if (isDark) name += " dark-mode";
    if (isXL) name += " xl";

    return name;
  }

  return (
    <div className={getContainerClass()} onClick={() => onCardClick(cardInfo)}>
      <div className="card-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>

        <InlineSoftwareSkill softwareSkills={cardInfo.softwareSkills} />

        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.shortDescription}
        </p>
      </div>

      <div className="card-info-footer">
        <span
          className={isDark ? "dark-mode card-link" : "card-link"}
          onClick={() => onCardClick(cardInfo)}
        >
          Learn more &#62; &#62;
        </span>
      </div>
    </div>
  );
}
