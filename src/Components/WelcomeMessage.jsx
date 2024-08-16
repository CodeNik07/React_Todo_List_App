import React, { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

export default function WelcomeMessage() {

  const {todoItems} = useContext(TodoItemsContext);

  return (
    todoItems.length === 0 && (
      <h3 className={styles.welcomeMessageStyle}>Enjoy your Day</h3>
    )
  );
}
