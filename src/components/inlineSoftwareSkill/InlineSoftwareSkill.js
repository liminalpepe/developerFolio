import React from "react";
import "./InlineSoftwareSkill.scss";

export default function InlineSoftwareSkill({softwareSkills}) {
  return softwareSkills ? (
    <div className="software-skill-inline">
      {softwareSkills.map((skills, i) => {
        return (
          <i
            key={i}
            className={skills.fontAwesomeClassname}
            title={skills?.skillName}
          ></i>
        );
      })}
    </div>
  ) : null;
}
