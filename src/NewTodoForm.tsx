import { INewTodoFormProps } from "./models/models";

const NewTodoForm = ({
  value,
  updateText,
  handleAction,
}: INewTodoFormProps) => {
  return (
    <label>
      <input value={value} onChange={(e) => updateText(e.target.value)} />
      <button onClick={handleAction}>Add todo</button>
    </label>
  );
};

export default NewTodoForm;
