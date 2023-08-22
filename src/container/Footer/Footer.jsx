import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:deepakpctebca2021@gmail.com" className="p-text">
            deepakpctebca2021@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="9878774969" className="p-text">
            +91 9878774969
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}

      {/* ----------------------------- */}

      <div className="app__social__mobile">
        <div>
          <a href="https://twitter.com/Deepak855Patel" target="_blank">
            <BsTwitter />
          </a>
        </div>
        <div>
          <a href="https://github.com/Deepak0Patel" target="_blank">
            <BsGithub />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/deepak-patel-441375288/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
        </div>

        <div>
          <a href="https://www.instagram.com/deep._.855/" target="_blank">
            <BsInstagram />
          </a>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
