import Form from "./Form";
import Header from "./Header";
import Summary from "./Summary";
import TodoList from "./TodoList";
import { items } from "../data.js";
import { useState } from "react";

export default function TodoApp() {
  const [todos, setTodos] = useState(items);
  function handleAddItem(item) {
    setTodos([...todos, item]);
  }
  function handleDeleteItem(id) {
    setTodos(todos.filter((item) => item.id !== id));
  }
  function updateItem(id) {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      })
    );
  }
  return (
    <div className="container">
      <Header />
      <Form onAddItem={handleAddItem} />
      <TodoList
        items={todos}
        onDeleteItem={handleDeleteItem}
        updateItem={updateItem}
      />
      <Summary items={todos} />
    </div>
  );
}
