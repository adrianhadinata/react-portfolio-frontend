import React from "react";
import "./ButtonWhatsApp.scss";
import { Images } from "../../constants";

export default function ButtonWhatsApp() {
  return (
    <a href="https://wa.me/6285802520642" target="_blank" rel="noreferrer">
      <img className="wa" alt="Whatsapp" src={Images.clickWhatsApp}></img>
    </a>
  );
}
