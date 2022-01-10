import React from "react";

class Todo extends React.Component {
  render() {
    return (
      <div className={this.props.todo.completed ? "todo completed" : "todo"}>
        <p onClick={() => this.props.handleToggle(this.props.todo)}>
          {this.props.todo.task}
        </p>
      </div>
    );
  }
}

export default Todo;
