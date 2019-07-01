import React from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.todoList.map((value, index) => {
                    return <TodoItem key={index} item={value} />
                })}
            </div>
        );
    }

}