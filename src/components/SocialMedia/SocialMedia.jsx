import React, { useState } from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

import "./SocialMedia.scss";

const SocialMedia = () => {
  const [randomID, setRandomID] = useState(String(Math.random()));
  return (
    <div className="app__social">
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
        // data-tooltip-place="right"
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
