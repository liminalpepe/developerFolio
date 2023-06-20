import React, {useContext} from "react";
import "./Modal.scss";
import StyleContext from "../../contexts/StyleContext";

export default function Modal({isOpen, setToggleModal, children, center}) {
  console.log("modal has", isOpen, setToggleModal);

  const {isDark} = useContext(StyleContext);

  function stopPropagation(e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  }

  function getModalClass() {
    let klass = "modal-box";
    if (isDark) klass += " dark-mode";
    if (center) klass += " modal-center";

    console.log("uepa", klass);
    return klass;
  }
  console.log("klass modal", getModalClass());

  if (isOpen) {
    return (
      <div className="modal-overlay" onClick={setToggleModal}>
        <div className={getModalClass()} onClick={stopPropagation}>
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
