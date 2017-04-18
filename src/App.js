import React, { Component } from 'react';

import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
        <div>
            Hello from the App!
            <TodoList />
        </div>
    );
  }
}

export default App;
