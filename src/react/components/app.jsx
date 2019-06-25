import React from "react";
import TodoList from "./TodoList";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            "item": "",
            "todoList": this.props.todoList
        };
    }

    updateTodoItem = (event) => {
        this.setState({
            "item": event.target.value
        });
    };

    addTodoItem = () => {
        if (this.state.item !== '') {
            this.setState({
                "item": "",
                "todoList": [...this.state.todoList, this.state.item]
            });
        }
    };

    render() {
        return (
            <div className="container-fluid">
                <div>
                    <h5>React Todo App</h5>
                </div>
                <div className="mt-2">
                    <input value={this.state.item} onChange={this.updateTodoItem}/>
                    <button onClick={this.addTodoItem}>Add</button>
                </div>
                <div>
                    <TodoList todoList={this.state.todoList}/>
                </div>
            </div>

        )
    }

}