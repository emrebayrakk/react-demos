import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "../feautures/todos/todosSlice.js";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
