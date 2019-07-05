import React from "react";

export const Column = (props) => {
    return (
        <div className={"col-md " + props.className}>
            {props.children}
        </div>
    )
};