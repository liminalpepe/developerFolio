import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import WorkWithMe from "./workWithMe/WorkWithMe";
import Skills from "./skills/Skills";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import AcademicProjects from "./academicProjects/AcademicProjects";
import Footer from "../components/footer/Footer";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";
import {skillsSection} from "../portfolio";
import ContactModal from "./contactModal/ContactModal";
import Modal from "../components/modal/Modal";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);
  const [toggleContactModal, setToggleContactModal] = useState(false);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }

    toggleContactModal && (document.body.style.overflow = "hidden");
    !toggleContactModal && (document.body.style.overflow = "unset");

    console.log("toggle modal", toggleContactModal);
  }, [toggleContactModal]);

  function openModal() {
    console.log("open modal@");
    setToggleContactModal(true);
  }

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <div className="content">
            <Modal
              isOpen={toggleContactModal}
              setToggleModal={() => setToggleContactModal(!toggleContactModal)}
              center={true}
            >
              <ContactModal></ContactModal>
            </Modal>
            <Header />
            <Greeting openContactModal={openModal} />
            <Skills skillsSection={skillsSection} />
            <Projects />
            <WorkExperience />
            <Education />
            {/* <StartupProject /> */}
            {/* <Achievement /> */}
            <AcademicProjects />
            {/* <Blogs /> */}
            <WorkWithMe />
            <Footer />
            <ScrollToTopButton />
          </div>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
