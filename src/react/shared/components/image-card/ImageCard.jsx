import React from "react";

import "ignore-styles";
import "./image-card.css";


export const ImageCard = (props) => {
    return (
        <div className={"py-2 image-card-container " + props.className}>
            <div className="image-card-text text-center w-100">
                <h4 className="font-weight-bolder">{props.text}</h4>
            </div>
            <img className="card-image rounded" src={props.url} />
        </div>
    );
};