import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
// import { Images } from "../../constants";

import { AppWrap, MotionWrap } from "../../wrapper";

import { urlFor, client } from "../../client";
import "./About.scss";

// static dataset
// const abouts = [
//   {
//     title: "Web Development",
//     description: "I am a good web developer",
//     imgUrl: Images.about01,
//   },
//   {
//     title: "Web Design",
//     description: "I am a good web developer",
//     imgUrl: Images.about02,
//   },
//   {
//     title: "Web Animation",
//     description: "I am a good web developer",
//     imgUrl: Images.about03,
//   },
//   {
//     title: "UI/UX",
//     description: "I am a good web developer",
//     imgUrl: Images.about04,
//   },
// ];

const About = () => {
  // sanity dataset
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);
  // sanity dataset end

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
            {/* For static */}
            {/* <img src={about.imgUrl} alt={about.title}></img> */}

            {/* For sanity */}
            <img src={urlFor(about.imgUrl)} alt={about.title}></img>
            <h2 className="bold-text" style={{ marginTop: 10 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

// export default AppWrap(About, "about");

export default AppWrap(
  // MotionWrap(About, "app__about"),
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
