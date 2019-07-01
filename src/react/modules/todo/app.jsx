import React from "react";
import { connect } from "react-redux";

import TodoList from "./components/TodoList";
import { addTodoItem } from "./actions";

const mapDispatchToProps = dispatch => {
    return {
        addTodoItem: todoItem => dispatch(addTodoItem(todoItem))
    }
};

const mapStateToProps = state => {
    return {
        todoList: state.todoList
    }
};

class ConnectedApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            "item": "",
        };
    }

    updateTodoItem = (event) => {
        this.setState({
            "item": event.target.value
        });
    };

    addTodoItem = () => {
        if (this.state.item !== '') {
            console.log(this.state.item);
            this.props.addTodoItem(this.state.item);
            this.setState({
                "item": ""
            })
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
                    <TodoList todoList={this.props.todoList}/>
                </div>
            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);