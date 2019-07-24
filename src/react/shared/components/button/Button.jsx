import React from "react";

import "ignore-styles";
import "./button.scss";

export const Button = (props) => (
    <div className={"btn " + props.className}>
      {props.children}
      {props.text}
    </div>
);