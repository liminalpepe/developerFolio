import React, {useContext, Suspense} from "react";
import "./Projects.scss";
import LightboxCard from "../../components/lightboxCard/LightboxCard";
import ProjectModal from "./projectModal/ProjectModal";
import Modal from "../../components/modal/Modal";
import {projects} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";
import {useState} from "react";

export default function Projects() {
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
        <h1 className="project-title">Projects</h1>
        <div className="repo-cards-div-main">
          {projects.lightboxCards.map((cardInfo, i) => {
            return (
              <LightboxCard
                cardInfo={cardInfo}
                key={i}
                isDark={isDark}
                onCardClick={openModal}
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
