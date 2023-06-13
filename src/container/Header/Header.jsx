import React from "react";

import "./Header.scss";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";

import { Images } from "../../constants";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div className="app__greeting-text">
              <p className="p-text">Hello, I am</p>
              <h1>Adrian</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img
          className="app__header-img-user"
          src={Images.adrian2048}
          alt="adrian"
        ></img>

        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={Images.circle}
          alt="profile_circle"
          className="overlay_circle"
        ></motion.img>
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[Images.codeigniter, Images.javascript, Images.sass].map(
          (circle, index) => (
            <div className="circle-cmp app_flex" key={`circle-${index}`}>
              <img src={circle} alt="circle"></img>
            </div>
          )
        )}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
