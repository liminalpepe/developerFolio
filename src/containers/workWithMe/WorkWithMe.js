import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./WorkWithMe.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import {illustration, workWithMe} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function WorkWithMe() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="work-with-me-main" id="work-with-me">
        <div className="work-with-me-main">
          <div className="work-with-me-text-div">
            <div>
              <h1
                className={
                  isDark ? "dark-mode work-with-me-text" : "work-with-me-text"
                }
              >
                {workWithMe.title}
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode work-with-me-text-p"
                    : "work-with-me-text-p subTitle"
                }
              >
                {workWithMe.subTitle}
              </p>
              <p
                className={
                  isDark
                    ? "dark-mode work-with-me-text-p"
                    : "work-with-me-text-p subTitle"
                }
              >
                {workWithMe.subTitleSoftSkills}
              </p>

              <div className="skills-main-div">
                <Fade left duration={1000}>
                  <div className="skills-text-div">
                    <div>
                      {workWithMe.softSkilss.map((skills, i) => {
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

              <SocialMedia />

              <div className="button-work-with-me-div">
                <Button text="Work with me" href="#contact" />
                {workWithMe.resumeLink && (
                  <Button
                    text="See my resume"
                    newTab={true}
                    href={workWithMe.resumeLink}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="work-with-me-image-div">
            <img
              alt="dev coding"
              src={require("../../assets/images/dev_coding_solving_puzzles.png")}
            ></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}
