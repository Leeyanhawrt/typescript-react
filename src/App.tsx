import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import NewTodo from './components/NewTodo';
import { ToDo } from './todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);

  const todoAddHandler = (text:string) => {
    setTodos(prevToDos => [...prevToDos, {id: Math.random().toString(), text: text}]);
  }

  const todoDeleteHandler = (id:string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => {
        return todo.id !== id
      })
    })
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler}/>
      <ToDoList items={todos} onDeleteTodo={todoDeleteHandler}/>
    </div>
  );
}

export default App;
