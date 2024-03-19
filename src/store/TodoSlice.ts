import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from ".";

export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

type LoadingStatusTypes = 'idle' | 'loading' | 'error'

const setError = (state: any, action: any) => {
  state.status = "rejected";
  state.error = action.payload
}

// Asynchronous thunk action creator
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) throw new Error("Failed to fetch todos");
    return response.json();
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
});

export const TodoSlice = createSlice({
  name: "todos",
  initialState: {
    // Here you can create/define your initial state
    todos: [] as ITodo[],
    status: "idle" as LoadingStatusTypes,
    error: null,
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

  // The "extraReducers" field lets the slice handle actions defined elsewhere
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.status = "loading";
      state.error = null
    })

    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.status = "idle";
      state.todos = action.payload
    })

    builder.addCase(fetchTodos.rejected, setError)
  }
});

export const { addTodo, toggleComplete, removeTodo } = TodoSlice.actions; // Exporting your tools for state management

export const selectTodos = (state: RootState) => state.todos.todos; // Exporting your state

export default TodoSlice.reducer; // Exporting your reducer