import React from 'react';
import Header from './components/Header';
import TaskContainer from './components/TaskContainer';
import Conclude from './components/Conclude';

function App() {
  return (
    <div className="App">
      <Header />
      <TaskContainer />
      <Conclude />
    </div>
  );
}

export default App;