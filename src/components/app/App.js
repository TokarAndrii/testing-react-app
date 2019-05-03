import React from 'react';
import Navigation from '../navigation/Navigation'
import ListToDos from '../listToDo/ListToDosContainer'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation isAuthenticated={true}></Navigation>
      </header>
      <ListToDos></ListToDos>
    </div>
  );
}

export default App;
