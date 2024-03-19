import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "./store";

import { selectTodos, fetchTodos } from "./store/TodoSlice";

import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector(selectTodos);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch])

  return (
    <ul>
      {todos.map((todo: any) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
