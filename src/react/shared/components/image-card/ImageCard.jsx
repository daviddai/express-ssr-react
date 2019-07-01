import React from "react";

import "ignore-styles";
import "./image-card.css";


export const ImageCard = (props) => {
    return (
        <div>
            <div className="image-card-text">
                <h4>{props.text}</h4>
            </div>
            <div>
                <img className="card-image img-thumbnail" src={props.url} />
            </div>
        </div>
    );
};