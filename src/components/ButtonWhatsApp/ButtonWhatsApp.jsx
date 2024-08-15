import React, { useState } from "react";
import "./ButtonWhatsApp.scss";
import { Images } from "../../constants";
import { HiChevronDoubleRight } from "react-icons/hi";
import Lottie from "react-lottie-player";
import robot from "../../assets/json/robot.json";

export default function ButtonWhatsApp() {
  const [isMinimized, setIsMinimized] = useState(true);

  const handleClick = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className={`wa ${isMinimized ? "minimized" : ""}`}>
      {isMinimized ? (
        <Lottie
          loop
          animationData={robot}
          play
          style={{ width: 200, height: 200 }}
          className="icon-minimize"
          onClick={handleClick}
        ></Lottie>
      ) : (
        <>
          <HiChevronDoubleRight
            className="icon-minimize"
            onClick={handleClick}
          />
          <a
            href="https://wa.me/6285802520642"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="Whatsapp" src={Images.clickWhatsApp} />
          </a>
          {/* <a href="/services" target="_blank" rel="noreferrer">
            
          </a> */}
        </>
      )}
    </div>
  );
}
