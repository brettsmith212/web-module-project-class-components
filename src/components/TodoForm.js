import React from "react";

class TodoForm extends React.Component {
  render() {
    return (
      <div>
        <input
          placeholder="...todo"
          onChange={this.props.handleChange}
          type="text"
          name="todo"
          value={this.props.input}
        />
        <button onClick={() => this.props.handleAddTodo(this.props.input)}>
          Add Todo
        </button>
        <button onClick={this.props.clearTodos}>Clear Completed</button>
      </div>
    );
  }
}

export default TodoForm;
