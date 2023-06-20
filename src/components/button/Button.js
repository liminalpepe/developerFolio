import React from "react";
import "./Button.scss";

export default function Button({
  text,
  className,
  href,
  newTab,
  onClickCallBack
}) {
  return (
    <div className={className}>
      <a
        className="main-button"
        href={href}
        target={newTab && "_blank"}
        onClick={onClickCallBack}
      >
        {text}
      </a>
    </div>
  );
}
