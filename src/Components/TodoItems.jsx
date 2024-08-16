import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-items-store";

export default function TodoItems() {

  const {todoItems} = useContext(TodoItemsContext);
  return (
    <div className="item-container">
      {todoItems.map((item) => {
        return (
          <TodoItem
            key={item.name}
            todoName={item.name}
            todoDate={item.date}
          />
        );
      })}
    </div>
  );
}
