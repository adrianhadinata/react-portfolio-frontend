import React from "react";

import { Images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <h2 className="head-text">Take a coffe & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={Images.email} alt="email" />
          <a href="mailto:adrianhhd@gmail.com" className="p-text">
            adrianhhd@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={Images.mobilePhone} alt="phone" />
          <a href="tel: +62 85802520642" className="p-text">
            +62 85802520642
          </a>
        </div>
      </div>
      <div className="copyright">
        <p className="p-text">Copyright @2023 Adrian</p>
        <p className="p-text">All rights reserved.</p>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
