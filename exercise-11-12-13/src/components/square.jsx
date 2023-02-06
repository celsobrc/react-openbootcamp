import React, { useState, useRef } from "react";

const Square = () => {
  const boxRef = useRef();
  const [color, setColor] = useState("RGB(0,0,0)");
  const [doubleClick, setDoubleClick] = useState(true);

  function generateRandom() {
    return Math.floor(Math.random() * 255);
  }

  function mouseOver() {
    if (doubleClick) {
      let blue = generateRandom();
      let green = generateRandom();
      let red = generateRandom();
      setColor(`RGB(${blue},${green},${red})`);
    } else {
      setColor("RGB(0,0,0)");
    }
  }

  function manageMouseLeave() {
    setColor("RGB(0,0,0)");
  }

  function manageDoubleClick() {
    setDoubleClick(!doubleClick);
  }

  return (
    <div
      onMouseEnter={mouseOver}
      onMouseLeave={manageMouseLeave}
      onDoubleClick={manageDoubleClick}
      style={{ width: "255px", height: "255px", background: color }}
    ></div>
  );
};

export default Square;
