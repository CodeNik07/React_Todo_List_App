import React, { useContext } from "react";
import styles from "./TodoItem.module.css";
import { FcFullTrash } from "react-icons/fc";
import { TodoItemsContext } from "../store/todo-items-store";

export default function TodoItem({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);

  return (
    <div className="container">
      <div className="row kg-rows">
        <div className={`col-6 ${styles.todoItemLeft}`}>{todoName}</div>
        <div className={`col-4 ${styles.todoItemLeft}`}>{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className={`btn kg-button ${styles.deleteButton}`}
            onClick={() => deleteItem(todoName)}
          >
            <FcFullTrash className={styles.deleteBtnComp} />
          </button>
        </div>
      </div>
    </div>
  );
}
