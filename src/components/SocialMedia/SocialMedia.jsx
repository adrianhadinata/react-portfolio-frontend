import React from "react";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";

import "./SocialMedia.scss";
import SocialMediaButton from "../Button/SocialMediaButton";

const SocialMedia = () => {
  const buttons = ["linkedin", "github", "whatsapp"];
  return (
    <div className="app__social">
      {buttons.map((button) => (
        <SocialMediaButton
          key={button}
          buttonFor={button}
          buttonLinkTo={
            button === "linkedin"
              ? "https://www.linkedin.com/in/adrianhhd/"
              : button === "github"
              ? "https://github.com/adrianhhd"
              : "https://wa.me/6285802520642"
          }
          buttonIcon={
            button === "linkedin" ? (
              <BsLinkedin></BsLinkedin>
            ) : button === "github" ? (
              <BsGithub></BsGithub>
            ) : (
              <BsWhatsapp></BsWhatsapp>
            )
          }
          buttonContent={
            button === "linkedin"
              ? "My LinkedIn"
              : button === "github"
              ? "My GitHub"
              : "My WhatsApp Number"
          }
        ></SocialMediaButton>
      ))}
    </div>
  );
};

export default SocialMedia;
