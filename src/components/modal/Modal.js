import React, {useContext} from "react";
import "./Modal.scss";
import StyleContext from "../../contexts/StyleContext";

export default function Modal({isOpen, setToggleModal, children}) {
  const {isDark} = useContext(StyleContext);

  if (isOpen) {
    return (
      <div className="modal-overlay" onClick={setToggleModal}>
        <div className={isDark ? "dark-mode modal-box" : "modal-box"}>
          <div
            className={isDark ? "dark-mode modal-container" : "modal-container"}
          >
            <div className="modal-close" onClick={setToggleModal}>
              x
            </div>
            <div>{children}</div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
