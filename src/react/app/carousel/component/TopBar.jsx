import React from "react";

import "ignore-styles";
import "./top-bar.css";

export default class TopBar extends React.Component {

    render() {
        return (
            <div className="top-bar w-100">
                <nav className="navbar navbar-light bg-transparent justify-content-end">
                    <div>
                        <span className="navbar-text text-white font-weight-bold login">
                            <i className="fa fa-sign-in mr-2" aria-hidden="true" />Login
                        </span>
                    </div>
                </nav>
            </div>
        );
    }

}