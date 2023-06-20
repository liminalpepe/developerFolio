import "./ProjectModal.scss";
import {useState} from "react";
import React, {useContext} from "react";
import StyleContext from "../../../contexts/StyleContext";
import InlineSoftwareSkill from "../../../components/inlineSoftwareSkill/InlineSoftwareSkill";

export default function ProjectModal(props) {
  const {isDark} = useContext(StyleContext);
  const [cardInfo, setCardInfo] = useState(props.cardInfo);

  return (
    <div className={isDark ? "modal-container dark-mode" : "modal-container"}>
      <p className="modal-title">{cardInfo?.title}</p>
      <InlineSoftwareSkill softwareSkills={cardInfo.softwareSkills} />

      <div className="modal-sub-title">
        {cardInfo?.description?.map((text, i) => {
          return <p key={i}>{text}</p>;
        })}
      </div>

      <div className="modal-links">
        {cardInfo?.links?.map((link, i) => {
          return (
            <a href={link.url} key={i} target="_blank" rel="noreferrer">
              {link.text}
            </a>
          );
        })}
      </div>

      {cardInfo?.images?.length > 0 ? (
        <>
          {cardInfo?.images?.map((img, i) => {
            return (
              <div key={i} className="modal-images">
                <img src={img.src} alt={img.alt}></img>
                {img.source_url ? (
                  <a href={img.source_url} target="_blank" rel="noreferrer">
                    {img.subtitle}
                  </a>
                ) : (
                  <p>{img.subtitle}</p>
                )}
              </div>
            );
          })}
        </>
      ) : null}
    </div>
  );
}
