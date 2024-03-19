export interface IDemoProps {}

export interface INewTodoFormProps {
  value: string;
  updateText: (text: string) => void;
  handleAction: () => void;
}

export interface ITodoItemProps {
  id: string;
  title: string;
  completed: boolean;
}
