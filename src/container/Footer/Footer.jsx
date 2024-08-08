import React from "react";
import { Images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const segments = location.pathname.split("/").filter((segment) => segment);
  const segment = segments[0];

  const WrappedFooter =
    segment === "services"
      ? AppWrap(
          MotionWrap(FooterContent, "app__footer"),
          "contact",
          "app__whitebg",
          ["services", "testimonials", "contact"]
        )
      : AppWrap(
          MotionWrap(FooterContent, "app__footer"),
          "contact",
          "app__whitebg"
        );

  return <WrappedFooter />;
};

const FooterContent = () => (
  <>
    <h2 className="head-text">Take a coffee & chat with me</h2>
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

export default Footer;
