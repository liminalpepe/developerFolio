import React from "react";
import "./SoftwareSkill.scss";

export default function SoftwareSkill({softwareSkills}) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-item"
                name={skills.skillName}
              >
                <i
                  className={skills.fontAwesomeClassname}
                  title={skills?.skillName}
                ></i>
                {skills.skillName ? <p>{skills.skillName}</p> : null}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
