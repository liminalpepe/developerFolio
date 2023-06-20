import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import {footer} from "../../portfolio";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className={isDark ? "dark-mode footer-div" : "footer-div"}>
        <p>{footer.title}</p>
        <p className="quotation-text">{footer.subTitle}</p>
        <p className="quotation-text">{footer.subQuote}</p>
        <p className="quottation-text-link">
          Inspired in{" "}
          <a href="https://github.com/saadpasta/developerFolio">
            developerFolio
          </a>
        </p>
      </div>
    </Fade>
  );
}
