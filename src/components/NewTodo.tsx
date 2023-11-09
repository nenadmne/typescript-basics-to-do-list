import { useRef, useContext } from "react";
import classes from "./NewTodo.module.css";
import { TodoContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodoContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text"> New Todo </label>
      <input type="text" className="text" ref={todoTextInputRef}></input>
      <button> Add Todo </button>
    </form>
  );
};

export default NewTodo;
