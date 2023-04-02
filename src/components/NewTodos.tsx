import React, { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const todosCtx = useContext(TodosContext);
  const addTodoHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredInput = inputRef.current!.value;

    if (enteredInput?.trim().length === 0) {
      return <p style={{ color: "red" }}>Please enter the activity first!</p>;
    }
    todosCtx.addTodo(enteredInput);
  };
  return (
    <form className={classes.form} onSubmit={addTodoHandler}>
      <label htmlFor="text">Todo text</label>
      <input ref={inputRef} type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
