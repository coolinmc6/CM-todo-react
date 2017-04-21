import React, { Component } from 'react';

import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
        <div id="main">
            <h1>React ToDo List</h1>
            <TodoList />
        </div>
    );
  }
}

export default App;
