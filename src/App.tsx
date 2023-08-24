import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import NewTodo from './components/NewTodo';
import { ToDo } from './todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);

  const todoAddHandler = (text:string) => {
    setTodos([{id: 't1', text:'Finish the course'}]);
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler}/>
     <ToDoList items={todos}/>
    </div>
  );
}

export default App;
