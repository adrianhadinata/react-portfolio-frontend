import React, { useState } from "react";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

import "./SocialMedia.scss";

const SocialMedia = () => {
  const [randomID, setRandomID] = useState(String(Math.random()));
  return (
    <div className="app__social">
      <motion.div
        className="rounded-social linkedin"
        data-tooltip-id={`wa-${randomID}`}
      >
        <a href="https://wa.me/6285802520642" target="_blank" rel="noreferrer">
          <BsWhatsapp></BsWhatsapp>
        </a>
      </motion.div>
      <Tooltip
        id={`wa-${randomID}`}
        content="My WhatsApp Number"
        noArrow={true}
        place="right"
      />
      <motion.div
        className="rounded-social linkedin"
        data-tooltip-id={`linkedin-${randomID}`}
        // data-tooltip-place="right"
      >
        <a
          href="https://www.linkedin.com/in/adrianhhd/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin></BsLinkedin>
        </a>
      </motion.div>
      <Tooltip
        id={`linkedin-${randomID}`}
        content="My LinkedIn Profile"
        noArrow={true}
        place="right"
      />
      <motion.div
        className="rounded-social github"
        data-tooltip-id={`github-${randomID}`}
      >
        <a
          href="https://github.com/adrianhadinata"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub></BsGithub>
        </a>
      </motion.div>
      <Tooltip
        id={`github-${randomID}`}
        content="My Github Repository"
        noArrow={true}
        place="right"
      />
    </div>
  );
};

export default SocialMedia;
