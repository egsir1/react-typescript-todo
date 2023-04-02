//import React, { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodos";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todos-context";
//import Todo from "./models/todos";

function App() {
  // const [todos, setTodos] = useState<Todo[]>([]);

  // const addTodoFunc = (todotext: string) => {
  //   const newTodo = new Todo(todotext);
  //   setTodos((prevTodo) => {
  //     return prevTodo.concat(newTodo);
  //   });
  // };

  // const removeTodoHandler = (todoId: string) => {
  //   setTodos((prevTodo) => {
  //     return prevTodo.filter((todo) => todo.id !== todoId);
  //   });
  // };

  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}
//onAddTodo={addTodoFunc}
//items={todos} onRemoveTodo={removeTodoHandler}

export default App;
