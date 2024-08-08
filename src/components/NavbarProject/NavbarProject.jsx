import React, { useState } from "react";

import "./NavbarProject.scss";

import { Link } from "react-router-dom";
import { Images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const NavbarProject = () => {
  const [togle, setTogle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={Images.logo} alt="Logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="app__flex p-text">
          <Link to="/">About Me</Link>
        </li>
        <li className="app__flex p-text">
          <Link to="/services">Services</Link>
        </li>
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
              <li className="app__flex p-text">
                <Link to="/">About Me</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default NavbarProject;
