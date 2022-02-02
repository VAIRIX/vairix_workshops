import React from "react";

export const Input = (props) => {
  // Slows down the component rendering time (simulation purposes)
  for (let i = 0; i < 5000000; i++) {}

  return <input {...props} />;
};

Input.displayName = "Input";
