import React from "react";

export const Slide = (props) => {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
};