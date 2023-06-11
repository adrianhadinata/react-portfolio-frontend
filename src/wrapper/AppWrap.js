import React from "react";
import { SocialMedia, NavigationDots } from "../components";

const AppWrap = (Component, idComponent, className) =>
  function HOC() {
    return (
      <div id={idComponent} className={`app__container ${className}`}>
        <SocialMedia></SocialMedia>
        <div className="app__wrapper app__flex">
          <Component></Component>
          <div className="copyright">
            <p className="p-text">Copyright @2023 Adrian</p>
            <p className="p-text">All rights reserved.</p>
          </div>
        </div>
        <NavigationDots active={idComponent}></NavigationDots>
      </div>
    );
  };

export default AppWrap;
