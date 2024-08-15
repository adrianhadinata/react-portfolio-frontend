import React from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

export default function SocialMediaButton(props) {
  const randomID = String(Math.random());
  return (
    <>
      <motion.div
        className={`rounded-social ${props.buttonFor}`}
        data-tooltip-id={`${props.buttonFor}-${randomID}`}
      >
        <a href={`${props.buttonLinkTo}`} target="_blank" rel="noreferrer">
          {props.buttonIcon}
        </a>
      </motion.div>
      <Tooltip
        id={`${props.buttonFor}-${randomID}`}
        content={`${props.buttonContent}`}
        noArrow={true}
        place="right"
      />
    </>
  );
}
