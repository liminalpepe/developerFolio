import React, {useContext, useRef, useState} from "react";
import "./ContactModal.scss";
import StyleContext from "../../contexts/StyleContext";
import emailjs from "@emailjs/browser";
import {contactInfo} from "../../portfolio";
import Button from "../../components/button/Button";

export default function ContactModal() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_pyxp8u1",
        "template_gfdth0v",
        e.target,
        "DmIlzJpMJ-pSKjOQB"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    setShowThankYou(true);
    e.target.reset();
  };

  const {isDark} = useContext(StyleContext);
  return (
    <div className="modal-container">
      {showThankYou ? (
        <>
          <div className="contact-success">
            <p className={isDark ? "dark-mode subTitle" : "subTitle"}>
              {contactInfo.thankYouTitle}
            </p>
            <p className={isDark ? "dark-mode subTitle" : "subTitle"}>
              {contactInfo.thankYoutDescription}
            </p>

            <i class="fa fa-check-square"></i>
          </div>
        </>
      ) : (
        <>
          <h1 className={isDark ? "title dark-mode" : "title"}>
            {contactInfo.title}
          </h1>
          {contactInfo?.description?.map((text, i) => {
            return (
              <p key={i} className={isDark ? "dark-mode subTitle" : "subTitle"}>
                {text}
              </p>
            );
          })}
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              name="name"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              name="email"
              required
            />
            <textarea
              placeholder="Message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              name="message"
              rows="15"
              required
            ></textarea>
            <button className="main-button" type="submit">
              Send
            </button>
          </form>
        </>
      )}
    </div>
  );
}
