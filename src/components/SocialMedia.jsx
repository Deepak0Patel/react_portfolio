import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
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
);

export default SocialMedia;
