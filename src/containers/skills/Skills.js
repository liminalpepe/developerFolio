import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {Fade} from "react-reveal";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills(props) {
  const {isDark} = useContext(StyleContext);
  if (!props.skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-text-div">
        <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>
          {props.skillsSection.title}{" "}
        </h1>
        <p
          className={
            isDark
              ? "dark-mode subTitle skills-text-subtitle"
              : "subTitle skills-text-subtitle"
          }
        >
          {props.skillsSection.subTitle}
        </p>
      </div>
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-text-div">
            <div>
              {props.skillsSection.skillsLeft.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="skills-text-div">
            <div>
              {props.skillsSection.skillsRight.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>

      <Fade right duration={1000}>
        <div className="skills-image-div">
          <SoftwareSkill />
        </div>
      </Fade>
    </div>
  );
}
