import React, { useContext, useRef } from "react";
import styles from "./AddTodo.module.css";
import { FcPlus } from "react-icons/fc";
import { TodoItemsContext } from "../store/todo-items-store";

export default function AddTodo() {

  const {addNewItem} = useContext(TodoItemsContext);

  const todoNameElement = useRef("");
  const dueDateElement = useRef("");

  const inputValidate = (ev) => {
    ev.preventDefault();
    console.log(ev);

    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;

    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    
    if (todoName !== "" && dueDate !== "") {
      addNewItem(todoName, dueDate);
    } else {
      alert("Please enter todoname and duedate.");
    }
  };
  return (
    <div className="container">
      <form className="row kg-rows" onSubmit={inputValidate}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter todo here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className={`col-2 ${styles.addBtnDiv}`}>
          <button type="submit" className="btn kg-button">
            <FcPlus className={styles.addBtnComp} />
          </button>
        </div>
      </form>
    </div>
  );
}
