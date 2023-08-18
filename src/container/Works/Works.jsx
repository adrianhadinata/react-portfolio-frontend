import React, { useEffect, useState } from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { motion } from "framer-motion";
import { Images } from "../../constants";
// import { client, urlFor } from "../../client";

import { AiFillEye, AiFillGithub } from "react-icons/ai";
import "./Works.scss";

const Works = () => {
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === "All") {
        setFilterWorks(works);
      } else {
        setFilterWorks(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  // const [works, setWorks] = useState([]);
  const [filterWorks, setFilterWorks] = useState([]);

  const works = [
    {
      name: "E-BUDGETING",
      projectLink: "#",
      tags: ["CodeIgniter", "All"],
      imgUrl: Images.budgeting,
      title: "E-BUDGETING",
      description:
        "I built this project fullstack for helping Accounting & Finance Department in PT. Globalindo Intimates. Builded using CodeIgniter 3, MySQL, Bootstrap 4 and various javascript libraries such as JQuery, DataTables, ChartJS, JQueryMask, etc.",
    },
    {
      name: "Sewing Data Analytics",
      projectLink: "#",
      tags: ["CodeIgniter", "All"],
      imgUrl: Images.layout,
      title: "Sewing Data Analytics",
      description:
        "I built this project fullstack for helping Industrial Development Department in PT. Globalindo Intimates. Builded using CodeIgniter 3, MySQL, Bootstrap 3 and various javascript libraries such as JQuery, DataTables, ChartJS, KonvaJS, etc.",
    },
    {
      name: "Payroll Management System",
      projectLink: "#",
      tags: ["CodeIgniter", "All"],
      imgUrl: Images.payroll,
      title: "Payroll Management System",
      description:
        "I built this project fullstack for Human Resource Department in PT. Rehobat Sringin. Builded using CodeIgniter 3, MySQL, Bootstrap 3 and various javascript libraries such as JQuery, DataTables, ChartJS, etc.",
    },
  ];

  useEffect(() => {
    // const query = '*[_type == "works"]';
    console.log("fetch work");

    setFilterWorks(works);
    console.log(works);
    // setWorks(works);
    // client.fetch(query).then((data) => {
    //   setFilterWorks(data);
    //   console.log(data);
    //   setWorks(data);
    // });
  }, []);

  return (
    <>
      <h2 className="head-text">
        My Creative <span> Portfolio</span>
        <br /> Section
      </h2>

      <div className="app__work-filter">
        {["Laravel", "CodeIgniter", "Flutter", "ReactJS", "UI/UX", "All"].map(
          (item, index) => (
            <div
              key={index}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
              onClick={() => handleWorkFilter(item)}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWorks.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  delayChildren: 0.25,
                  ease: "easeInOut",
                  straggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileHover={{ scale: [1, 0.9] }}
                    whileInView={{ scale: [0, 1] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="app__flex"
                  >
                    <AiFillGithub></AiFillGithub>
                  </motion.div>
                </a>
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileHover={{ scale: [1, 0.9] }}
                    whileInView={{ scale: [0, 1] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="app__flex"
                  >
                    <AiFillEye></AiFillEye>
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text">{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Works, "app__works"),
  "works",
  "app__primarybg"
);
