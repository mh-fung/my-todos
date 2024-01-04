import { FormEvent } from "react";
import ToDoItem from "../../../types/types";
import Task from "../../Task/Task";

type ToDoListProps = {
  toDoList: ToDoItem[];
  handleChecked: (event: FormEvent<HTMLInputElement>) => void;
  handleClick: (event: FormEvent<HTMLButtonElement>) => void;
};

const ToDoList = ({ toDoList, handleChecked, handleClick }: ToDoListProps) => {
  const displayedToDoList = toDoList.map((item, index) => {
    return (
      <Task
        key={"item" + index}
        toDoItem={item}
        handleChecked={handleChecked}
        handleClick={handleClick}
      />
    );
  });
  return <div className="toDoList">{displayedToDoList}</div>;
};

export default ToDoList;
