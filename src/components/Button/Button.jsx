import React from "react";
import "./Button.scss";

export default function RoundedButton({ act, icon, title, isDisabled }) {
  return (
    <button
      className="buttonRounded"
      onClick={act}
      title={title}
      disabled={isDisabled}
    >
      {icon}
    </button>
  );
}
