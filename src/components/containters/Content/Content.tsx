import { FormEvent } from "react";
import ToDoItem from "../../../types/types";
import ToDoList from "../TodoList/TodoList";
type ContentProps = {
  toDoListArray: ToDoItem[];
  handleChecked: (event: FormEvent<HTMLInputElement>) => void;
};
const Content = ({ toDoListArray, handleChecked }: ContentProps) => {
  return <ToDoList toDoList={toDoListArray} handleChecked={handleChecked} />;
};
export default Content;
