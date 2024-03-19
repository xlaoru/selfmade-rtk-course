import { useDispatch } from "react-redux";

import { toggleComplete, removeTodo } from "./store/TodoSlice";

import { ITodoItemProps } from "./models/models";

const TodoItem = ({ id, title, completed }: ITodoItemProps) => {
  const dispatch = useDispatch();
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleComplete({ id }))}
      />
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {title}
      </span>
      <button onClick={() => dispatch(removeTodo({ id }))}>&times;</button>
    </li>
  );
};

export default TodoItem;
