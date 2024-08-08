import React from "react";
import { Tooltip } from "react-tooltip";
import { AppWrap, MotionWrap } from "../../wrapper";
import { motion } from "framer-motion";
import { Images } from "../../constants";
import "./Skills.scss";

const Skills = () => {
  const skills = [
    { id: 1, name: "Laravel", icon: Images.laravel, bgColor: "#e4e4e4" },
    { id: 2, name: "Javascript", icon: Images.javascript, bgColor: "#e4e4e4" },
    { id: 3, name: "NodeJS", icon: Images.node, bgColor: "#e4e4e4" },
    { id: 4, name: "Flutter", icon: Images.flutter, bgColor: "#e4e4e4" },
    { id: 5, name: "Git", icon: Images.git, bgColor: "#e4e4e4" },
    { id: 6, name: "React", icon: Images.react, bgColor: "#e4e4e4" },
    {
      id: 7,
      name: "CodeIgniter",
      icon: Images.codeigniter,
      bgColor: "#e4e4e4",
    },
    { id: 8, name: "Go", icon: Images.golang, bgColor: "#e4e4e4" },
    { id: 9, name: "Arduino", icon: Images.arduino, bgColor: "#e4e4e4" },
    { id: 10, name: "MySQL", icon: Images.mysql, bgColor: "#e4e4e4" },
    { id: 11, name: "PostgreSQL", icon: Images.postgresql, bgColor: "#e4e4e4" },
  ];

  const experiences = [
    {
      year: "2022",
      works: [
        {
          name: "Junior Programmer",
          company: "PT. Globalindo Intimates",
          desc: "Started at Nov 2022 - Now. I work as Junior Programmer at PT. Globalindo Intimates. I have lot of experience building full stack web application for helping Industrial Engineering, Accounting & Finance Department in this company.",
        },
      ],
    },
    {
      year: "2018",
      works: [
        {
          name: "Desk Collector",
          company: "TB. AA, Building Material Store",
          desc: "Started at June 2018 - Okt 2022 I work as Desk Collector at TB. AA Semarang. I have good knowledge about building and have public communication skill experience in this work",
        },
      ],
    },
    {
      year: "2017",
      works: [
        {
          name: "Laptop Technician",
          company: "Discount Notebook",
          desc: "Started at Apr 2017 - May 2018 I work as Laptop Technician at Discount Notebook Semarang Store. I have good skill about repairing software or hardware laptop.",
        },
      ],
    },
  ];

  const brands = [
    { imgUrl: Images.discount, name: "Discount Notebook" },
    { imgUrl: Images.globalindo, name: "PT. Globalindo Intimates" },
    { imgUrl: Images.tebeaa, name: "TB. AA" },
    { imgUrl: Images.rehobat, name: "PT. Rehobat Sringin" },
  ];

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app_flex"
              key={skill.id}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name}></img>
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="app__skills-exp">
          {experiences.map((exp) => (
            <motion.div className="app__skills-exp-item" key={exp.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{exp.year}</p>
                <motion.div className="app__skills-exp-works">
                  {exp.works.map((work) => (
                    <React.Fragment key={work.name}>
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="app__skills-exp-work"
                        data-tooltip-id={work.name}
                      >
                        <h4 className="bold-text">{work.name}</h4>
                        <p className="p-text">{work.company}</p>
                      </motion.div>
                      <Tooltip
                        id={work.name}
                        effect={"solid"}
                        arrowColor={"#fff"}
                        className="skills-tooltip"
                      >
                        {work.desc}
                      </Tooltip>
                    </React.Fragment>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="app__sertificates-brands app__flex">
        {brands.map((brand) => (
          <React.Fragment key={brand.name}>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={brand.imgUrl}
                alt={brand.name}
                data-tooltip-id={brand.name}
              />
            </motion.div>
            <Tooltip
              id={brand.name}
              place="bottom"
              variant="dark"
              arrowColor={"#fff"}
              content={brand.name}
              positionStrategy="absolute"
              float={true}
              noArrow={true}
            />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
