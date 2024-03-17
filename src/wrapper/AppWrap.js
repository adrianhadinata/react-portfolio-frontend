import React from "react";
import { SocialMedia, NavigationDots } from "../components";

const AppWrap = (Component, idComponent, className) =>
  function HOC() {
    return (
      <div id={idComponent} className={`app__container ${className}`}>
        <SocialMedia></SocialMedia>
        <div className="app__wrapper app__flex">
          <Component></Component>
        </div>
        <NavigationDots active={idComponent}></NavigationDots>
      </div>
    );
  };

export default AppWrap;
