import { createSlice } from "@reduxjs/toolkit";
import { items } from "../../../data.js";

const initialState = {
  items,
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.items = state.items.map((item) => {
        if (action.payload === item.id) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      });
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
export default todosSlice.reducer;
