import React, {useContext, Suspense} from "react";
import "./AcademicProjects.scss";
import LightboxCard from "../../components/lightboxCard/LightboxCard";
import ProjectModal from "../projects/projectModal/ProjectModal";
import Modal from "../../components/modal/Modal";
import {academicProjects} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../loading/Loading";
import {useState} from "react";

export default function AcademicProjects() {
  const [toggleModal, setToggleModal] = useState(false);
  const [cardInfo, setCardInfo] = useState({});
  const renderLoader = () => <Loading />;
  // todo: remove useContex because is not supported
  const {isDark} = useContext(StyleContext);

  function openModal(cardInfo) {
    setCardInfo(cardInfo);
    setToggleModal(true);
  }

  return (
    <Suspense fallback={renderLoader()}>
      <div className="main" id="projects">
        <h1 className="project-title">Academic Projects</h1>
        <div className="repo-cards-div-main">
          {academicProjects.lightboxCards.map((cardInfo, i) => {
            return (
              <LightboxCard
                cardInfo={cardInfo}
                key={i}
                isDark={isDark}
                onCardClick={openModal}
                isXL={true}
              />
            );
          })}
        </div>
      </div>

      <Modal
        isOpen={toggleModal}
        setToggleModal={() => setToggleModal(!openModal)}
      >
        <ProjectModal cardInfo={cardInfo}></ProjectModal>
      </Modal>
    </Suspense>
  );
}
