import React, { useState, useEffect } from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { motion } from "framer-motion";

import { AiFillEye } from "react-icons/ai";
import "./Works.scss";
import { useNavigate } from "react-router-dom";

import allProjects from "../../assets/json/works.json";

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
  const [filterWorks, setFilterWorks] = useState([]);

  useEffect(() => {
    setFilterWorks(works);
  }, []);

  const works = allProjects;
  const navigate = useNavigate();

  return (
    <>
      <h2 className="head-text">
        My Creative <span> Portfolio</span>
        <br /> Section
      </h2>

      <div className="app__work-filter">
        {["CodeIgniter", "Arduino", "React", "All"].map((item, index) => (
          <div
            key={index}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
            onClick={() => handleWorkFilter(item)}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWorks.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={process.env.PUBLIC_URL + work.imgUrl} alt={work.name} />

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
                <button
                  title="Click fo details"
                  className="app_btn-details"
                  onClick={() => navigate("/project/" + work.id)}
                  id={work.id}
                >
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
                </button>
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
