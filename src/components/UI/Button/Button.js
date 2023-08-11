import React from "react";

const Button = (props) => {
  return (
    <button onClick={props.onClick} type={props.type} className={props.className}>
      {props.text}
    </button>
  );
};

export default Button;
