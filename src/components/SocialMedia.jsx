import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/AfaqKhan1616">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/afaq-hassan-khan/">
        <BsLinkedin />
      </a>
    </div>

    {/* <div>
      <BsInstagram />
    </div> */}
  </div>
);

export default SocialMedia;
