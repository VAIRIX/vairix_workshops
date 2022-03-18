import React from "react";

const InputComponent = (props) => {
  // Slows down the component rendering time (simulation purposes)
  for (let i = 0; i < 5000000; i++) {}

  return <input {...props} />;
};

export const Input = React.memo(InputComponent);

Input.displayName = "Input";
