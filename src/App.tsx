import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import NewTodo from './components/NewTodo';

const App: React.FC = () => {
  const todos = [{id: 't1', text:'Finish the course'}];

  const todoAddHandler = (text:string) => {
    console.log(text)
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler}/>
     <ToDoList items={todos}/>
    </div>
  );
}

export default App;
