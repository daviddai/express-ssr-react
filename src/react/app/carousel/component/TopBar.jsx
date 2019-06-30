import React from "react";

import "ignore-styles";
import "./top-bar.css";

export default class TopBar extends React.Component {

    render() {
        return (
            <div className="top-bar w-100">
                <nav className="navbar navbar-light bg-transparent justify-content-end">
                    <div className="top-bar-item">
                        <span>
                            <i className="fa fa-shopping-cart mr-4 text-white" aria-hidden={true} />
                        </span>
                        <span className="navbar-text text-white mr-4">
                            <i className="fa fa-sign-in mr-2" aria-hidden="true" />Login
                        </span>
                        <span className="navbar-text text-white">
                            <i className="fa fa-user-plus mr-2" aria-hidden="true" />Join
                        </span>
                    </div>
                </nav>
            </div>
        );
    }

}