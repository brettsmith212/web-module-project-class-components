import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [],
      input: "",
    };
  }

  handleAddTodo = (newTask) => {
    let newTodo = {
      task: newTask,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo],
    });
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value,
    });
  };

  render() {
    console.log(this.state.input);
    console.log(this.state.todos);
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList />
        <TodoForm
          handleAddTodo={this.handleAddTodo}
          handleChange={this.handleChange}
          input={this.state.input}
        />
      </div>
    );
  }
}

export default App;
