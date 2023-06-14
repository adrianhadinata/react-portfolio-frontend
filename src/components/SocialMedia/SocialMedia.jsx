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
        data-tip
        data-tooltip-id={`linkedin-${randomID}`}
        data-tooltip-place="right"
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
        data-for={randomID}
        effect={"solid"}
        arrowColor={"#fff"}
        className="linkedin-tooltip"
        classNameArrow="linkedin-arrow"
      >
        My Linkedin Profile
      </Tooltip>
      <motion.div
        data-tip
        data-tooltip-id={`github-${randomID}`}
        data-tooltip-place="right"
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
        data-for={randomID}
        effect={"solid"}
        arrowColor={"#fff"}
        className="github-tooltip"
        classNameArrow="github-arrow"
      >
        My Github Repository
      </Tooltip>
    </div>
  );
};

export default SocialMedia;
