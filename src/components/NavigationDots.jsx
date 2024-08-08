import React from "react";

const NavigationDots = ({ active, arrMenu }) => {
  if (!arrMenu) {
    arrMenu = ["home", "about", "works", "skills", "competencies", "contact"];
  }
  return (
    <div className="app__navigation">
      {arrMenu.map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        ></a>
      ))}
    </div>
  );
};

export default NavigationDots;
