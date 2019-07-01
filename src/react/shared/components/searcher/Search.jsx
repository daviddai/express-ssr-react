import React from "react";

import "ignore-styles";
import "./search.css"

export const Search = (props) => {
    return (
        <div className="search w-50">
            <div className="mb-3 text-center">
                <h1 className="text-white text-uppercase">{props.title}</h1>
            </div>
            <div className="input-group input-group-lg">
                <input type="text" className="form-control rounded-0" placeholder={props.placeholder} />
                <div className="input-group-append">
                    <button type="button" className="btn btn-secondary">
                        <i className="fa fa-search" />
                    </button>
                </div>
            </div>
        </div>
    );
};