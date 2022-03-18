import React, { useState, useMemo } from "react";
import Color from "color";

export const Box = ({ color, children, onClickBox }) => {
  const [grayscale, setGrayscale] = useState(false);

  const toggleGrayscale = (e) => {
    // Stop propagation to prevent the click event from bubbling up to the parent
    e.stopPropagation();

    setGrayscale(!grayscale);
    onClickBox?.(color);
  };

  const grayscaleColor = useMemo(
    () => Color({ hex: color }).grayscale(),
    [color]
  );
  
  // Slows the component rendering time
  for (let i = 0; i < 10000000; i++) {}

  return (
    <div
      style={{ backgroundColor: grayscale ? grayscaleColor : color }}
      className="box"
      onClick={toggleGrayscale}
    >
      {children}
    </div>
  );
};
