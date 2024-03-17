import React from "react";
import "./Features.scss";
import maintenanceJson from "../../assets/json/lottie-maintenance.json";
import Lottie from "react-lottie-player";

export default function Features({ features }) {
  console.log(features);
  return (
    <div
      className="app__container app_whitebg app__flex"
      style={{ flexDirection: "column" }}
    >
      <Lottie
        loop
        animationData={maintenanceJson}
        play
        style={{ width: 350, height: 350 }}
      ></Lottie>

      <h2 className="head-text" style={{ textAlign: "center" }}>
        This Section is Under Construction, Please Comeback Later ^^
      </h2>
    </div>
  );
}
