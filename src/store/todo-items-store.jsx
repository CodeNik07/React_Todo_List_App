import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const TodoItemsContextProvider = ({ children }) => {
  const todoItemReducer = (currTodoItem, action) => {
    let newTodoItem = currTodoItem;

    if (action.type === "NEW_ITEM") {
      newTodoItem = [
        ...currTodoItem,
        { name: action.payload.itemName, date: action.payload.itemDueDate },
      ];
    } else if (action.type === "DELETE_ITEM") {
      newTodoItem = currTodoItem.filter(
        (item) => item.name !== action.payload.itemName
      );
    }

    return newTodoItem;
  };

  const [todoItems, dispatchTodoItem] = useReducer(todoItemReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItem(newItemAction);
  };

  const deleteItem = (itemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName,
      },
    };
    dispatchTodoItem(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
