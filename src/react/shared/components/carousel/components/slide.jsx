import React from "react";

export const Slide = (props) => {
    return (
        <div>
            <img className="w-100" src={props.url} alt="banner image" />
        </div>
    );
};