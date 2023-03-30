import React from "react";

const Button = (props) => {
  return (
    <button
      className={props.className}
      onClick={props.onClick}
      title={props.title}
    >
      <props.content />
    </button>
  );
};

export default Button;
