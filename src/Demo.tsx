import { useState } from "react";

import { useDispatch } from "react-redux";

import { addTodo } from "./store/TodoSlice";

import { IDemoProps } from "./models/models";

import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

export default function Demo({}: IDemoProps) {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addTodo({ text }));
      setText("");
    }
  };

  return (
    <div className="App">
      <NewTodoForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />
      <TodoList />
    </div>
  );
}
