import React from "react";
import "./LightboxCard.scss";

export default function LightboxCard({cardInfo, isDark, onCardClick}) {
  return (
    <div
      className={isDark ? "dark-mode card-info" : "card-info"}
      onClick={() => onCardClick(cardInfo)}
    >
      <div className="card-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
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
