import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {greeting.title}
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <span
                className={
                  isDark
                    ? "dark-mode greeting-text-span"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitleRoles}
              </span>

              <div className="button-greeting-div">
                <Button text="Work with me" href="#contact" />
                {greeting.resumeLink && (
                  <Button
                    text="See my resume"
                    newTab={true}
                    href={greeting.resumeLink}
                  />
                )}
              </div>

              <SocialMedia />

              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-sub"
                    : "greeting-text-sub subTitle"
                }
              >
                {greeting.subText}
              </p>
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              alt="dev coding"
              src={require("../../assets/images/dev_coding.png")}
            ></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}
