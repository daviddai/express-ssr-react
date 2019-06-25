import React from "react";

import "ignore-styles";
import "./todo-item.css";

export default class TodoItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="todo-item">
                {this.props.item}
            </div>
        );
    }

}