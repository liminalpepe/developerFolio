import "./ProjectModal.scss";
import {useState} from "react";
import React, {useContext, Suspense} from "react";
import StyleContext from "../../../contexts/StyleContext";

export default function ProjectModal(props) {
  const {isDark} = useContext(StyleContext);
  const [cardInfo, setCardInfo] = useState(props.cardInfo);

  return (
    <div className={isDark ? "modal-container dark-mode" : "modal-container"}>
      <p className="modal-title">{cardInfo?.title}</p>
      {cardInfo?.images?.length > 0 ? (
        <div className="modal-images">
          {cardInfo?.images?.map((img, i) => {
            return <img src={img.src} alt={img.alt} key={i}></img>;
          })}
        </div>
      ) : null}
      <p className="modal-sub-title">{cardInfo?.description}</p>
      <div className="modal-links">
        {cardInfo?.links?.map((link, i) => {
          return (
            <a href={link.url} key={i} target="_blank" rel="noreferrer">
              {link.text}
            </a>
          );
        })}
      </div>
    </div>
  );
}
