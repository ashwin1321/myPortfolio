import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "contact"].map((item) => (
        <a
          href={`#${item}`}
          key={item + "dot"}
          className="app__navigation-dot"
          style={active == item ? { backgroundColor: "#313bac" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
