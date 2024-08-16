import React, { useReducer, useState } from "react";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import "./App.css";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-items-store";

export default function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemsContextProvider>
  );
}
