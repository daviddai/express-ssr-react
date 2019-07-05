import React from "react";

import "ignore-styles";
import "./image-card.css";


export const ImageCard = (props) => {
    return (
        <div className="py-2 image-card-container">
            <div className="image-card-text">
                <h4>{props.text}</h4>
            </div>
            <img className="card-image" src={props.url} />
        </div>
    );
};