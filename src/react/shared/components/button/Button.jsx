import React from "react";

import "ignore-styles";
import "./button.scss";

export const Button = (props) => (
    <div className={"btn " + props.className} onClick={props.onClick}>
      {props.children}
      {props.text}
    </div>
);