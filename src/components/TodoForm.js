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
        />
        <button onClick={() => this.props.handleAddTodo(this.props.input)}>
          Add Todo
        </button>
        <button>Clear Completed</button>
      </div>
    );
  }
}

export default TodoForm;
