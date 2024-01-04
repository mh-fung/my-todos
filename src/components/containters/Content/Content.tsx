import { FormEvent } from "react";
import ToDoItem from "../../../types/types";
import ToDoList from "../TodoList/TodoList";
type ContentProps = {
  toDoListArray: ToDoItem[];
  handleChecked: (event: FormEvent<HTMLInputElement>) => void;
  handleClick: (event: FormEvent<HTMLButtonElement>) => void;
};
const Content = ({
  toDoListArray,
  handleChecked,
  handleClick,
}: ContentProps) => {
  return (
    <ToDoList
      toDoList={toDoListArray}
      handleChecked={handleChecked}
      handleClick={handleClick}
    />
  );
};
export default Content;
