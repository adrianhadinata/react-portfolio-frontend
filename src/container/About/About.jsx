// import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { Images } from "../../constants";

import { AppWrap, MotionWrap } from "../../wrapper";

// import { urlFor, client } from "../../client";
import "./About.scss";

// static dataset
const abouts = [
  {
    title: "MERN Stack",
    description:
      "I am familiar with Express.js, Node.js and React. Right now, I am still exploring about MongoDB .",
    imgUrl: Images.about01,
  },
  {
    title: "Front End",
    description:
      "I am familiar using vanilla CSS or using its framework like Bootstrap. I also experienced with various javascript libraries such as JQuery, DataTables, ChartJS, KonvaJS and many more.",
    imgUrl: Images.about02,
  },
  {
    title: "Mobile Application",
    description:
      "I am still learning and explore more about Flutter and its programming language which is Dart.",
    imgUrl: Images.about03,
  },
  {
    title: "Back End",
    description:
      "Technology that i usually use in back end is PHP with CodeIgniter or Laravel frameworks and MySQL as DBMS",
    imgUrl: Images.about04,
  },
];

const About = () => {
  // sanity dataset
  // const [abouts, setAbouts] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "abouts"]';

  //   client.fetch(query).then((data) => {
  //     setAbouts(data);
  //   });
  // }, []);
  // sanity dataset end

  return (
    <>
      <h2 className="head-text">
        I know that <span> Maintainable Code</span>
        <br /> is made by <span> Happy Programmers</span>
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
            <img src={about.imgUrl} alt={about.title}></img>
            <h2 className="bold-text" style={{ marginTop: 10 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>

            {/* For sanity */}
            {/* <img src={urlFor(about.imgUrl)} alt={about.title}></img>
            <h2 className="bold-text" style={{ marginTop: 10 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p> */}
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
