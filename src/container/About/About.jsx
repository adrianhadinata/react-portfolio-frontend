import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { Images } from "../../constants";

import "./About.scss";

const abouts = [
  {
    title: "Web Development",
    description: "I am a good web developer",
    imgUrl: Images.about01,
  },
  {
    title: "Web Design",
    description: "I am a good web developer",
    imgUrl: Images.about02,
  },
  {
    title: "Web Animation",
    description: "I am a good web developer",
    imgUrl: Images.about03,
  },
  {
    title: "UI/UX",
    description: "I am a good web developer",
    imgUrl: Images.about04,
  },
];
const About = () => {
  return (
    <>
      <h2 className="head-text">
        {" "}
        I know that <span> Good Design</span>
        <br /> means <span> Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title}></img>
            <h2 className="bold-text">{about.title}</h2>
            <p className="p-text">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
