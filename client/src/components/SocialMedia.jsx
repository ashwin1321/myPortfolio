import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.linkedin.com/in/ashwin-khatiwada/">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://www.github.com/ashwin1321/">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/_ashw1n._/">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
