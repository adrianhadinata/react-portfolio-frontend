import React from "react";

import { AppWrap, MotionWrap } from "../../wrapper";
import { motion } from "framer-motion";
import { Images } from "../../constants";
import "./Services.scss";
import { ButtonWhatsApp } from "../../components";

const Services = () => {
  let services = [];

  services.push(Images.serviceArduino, Images.serviceWeb);
  return (
    <>
      <ButtonWhatsApp></ButtonWhatsApp>
      <h2 className="head-text">
        Need <span>helps</span>? This is list of our <span>services</span> that
        might interest you
      </h2>

      <div className="app__row">
        {services.map((service, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__column"
            key={index}
          >
            <img src={service} alt={service} className="app__image"></img>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Services, "app__about"),
  "services",
  "app__primarybg",
  ["services", "testimonials", "contact"]
);
