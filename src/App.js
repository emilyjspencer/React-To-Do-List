import React, { Component } from 'react';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Meditate',
        completed: false
      },
      {
        id: 2,
        title: 'Go for a run',
        completed: false
      },
      {
        id: 3,
        title: 'Prepare lunches',
        completed: false
      },
      {
        id: 4,
        title: 'Ring people',
        completed: false
      },
      {
        id: 5,
        title: 'Paint nails',
        completed: false
      }
    ]
  }
  render() {
    return (
      <div className="App">
    <Todos />
      
    
    </div>
  );
}
}

export default App;
