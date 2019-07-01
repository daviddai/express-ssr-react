import React from "react";

import "ignore-styles";
import "./top-bar.css";

export const TopBar = (props) => {
    return (
        <div className="top-bar w-100">
            <nav className="navbar navbar-light bg-transparent justify-content-end">
                <div className="top-bar-item">
                    {props.children}
                </div>
            </nav>
        </div>
    );
};