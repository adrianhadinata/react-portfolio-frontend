import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

import "./Navbar.scss";

import { Images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [togle, setTogle] = useState(false);
  const location = useLocation();

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={Images.logo} alt="Logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "works", "skills", "competencies", "contact"].map(
          (item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              {location.pathname === "/" ? (
                <a href={`#${item}`}>{item}</a>
              ) : (
                <Link to={"/#" + item}>{item}</Link>
              )}
            </li>
          )
        )}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setTogle(true)}></HiMenuAlt4>

        {togle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setTogle(false)}></HiX>
            <ul>
              {[
                "home",
                "about",
                "works",
                "skills",
                "competencies",
                "contact",
              ].map((item) => (
                // <li key={item}>
                //   <a href={`#${item}`} onClick={() => setTogle(false)}>
                //     {item}
                //   </a>
                // </li>
                <li className="app__flex p-text" key={`link-${item}`}>
                  {location.pathname === "/" ? (
                    <a href={`#${item}`}>{item}</a>
                  ) : (
                    <Link to={"/#" + item}>{item}</Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
