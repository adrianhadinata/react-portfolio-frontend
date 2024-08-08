import React from "react";

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

const lectures = [
  {
    title:
      "Industrial Engineering Interns Team from Atma Jaya University Yogyakarta",
    imgUrl: Images.internUajy,
    description:
      "Assisting Interns from Atma Jaya University Yogyakarta in their project called Temperature and Humidity Real-time Monitoring based on IoT. I guided them in writing clean code, programming flow/logic, troubleshooting and code efficiency. What we produced were Arduino-based devices that already installed on 24 different rooms in PT. Globalindo intimates and a Codeigniter-based web application to perform realtime monitoring along with visualization and various kinds of reporting.",
  },
  {
    title:
      "Electronic Engineering Interns Team from UDINUS University Semarang",
    imgUrl: Images.internUdinus,
    description:
      "Assisting Interns from UDINUS University Semarang in their project called IoT-based Real-time Monitoring of sewing machine electric current. I guided them in writing clean code, programming flow/logic, troubleshooting and code efficiency. What we produced were Arduino-based devices that already installed on 3 sewing machine and a Codeigniter-based web application to perform realtime monitoring along with visualization and various kinds of reporting.",
  },
  {
    title: "Students from SMK Negeri 1 Rota Bayat",
    imgUrl: Images.tefaBayat,
    description:
      "I was assigned to teach as an invited lecturer in a government program called Teaching Factory (TEFA) at SMK Negeri 1 Rota Bayat. The material I taught was about Digital Transformation. This includes material about the history of industrial revolutions 1 to 4, which is now the era of IoT.",
  },
];

const About = () => {
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
            <p
              className="p-text"
              style={{ marginTop: 10, textAlign: "justify" }}
            >
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>

      <h2 className="head-text" style={{ marginTop: 50 }}>
        I am a person who likes to <span>learn</span> and <span>sharing</span>{" "}
        knowledge
      </h2>

      <div className="app__profiles">
        {lectures.map((lecture, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__flex-lectures"
            key={lecture.title + index}
          >
            <div className="app__mentoring-item">
              <img src={lecture.imgUrl} alt={lecture.title}></img>
            </div>

            <div className="app__mentoring-item">
              <h3 className="head-text-smaller" style={{ marginTop: 10 }}>
                {lecture.title}
              </h3>
              <p style={{ marginTop: 10, textAlign: "justify" }}>
                {lecture.description}
              </p>
            </div>
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
