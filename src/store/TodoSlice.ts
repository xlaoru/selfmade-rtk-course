import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

export const TodoSlice = createSlice({
  name: "todos",
  initialState: {
    // Here you can create/define your initial state
    todos: [] as ITodo[],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        title: action.payload.text,
        completed: false,
      });
    },
    toggleComplete(state, action) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggledTodo!.completed = !toggledTodo!.completed;
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, toggleComplete, removeTodo } = TodoSlice.actions; // Exporting your tools for state management

export const selectTodos = (state: RootState) => state.todos.todos; // Exporting your state

export default TodoSlice.reducer; // Exporting your reducer