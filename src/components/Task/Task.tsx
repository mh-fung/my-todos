import { FormEventHandler } from "react";
import ToDoItem from "../../types/types";
import "./Task.scss";

type TaskProps = {
  toDoItem: ToDoItem;
  handleChecked: FormEventHandler<HTMLInputElement>;
  handleClick: FormEventHandler<HTMLButtonElement>;
};

const Task = ({ toDoItem, handleChecked, handleClick }: TaskProps) => {
  return (
    <div className="toDoItem">
      <input value={toDoItem.task} type="checkbox" onClick={handleChecked} />
      <label
        htmlFor=""
        className={`${
          toDoItem.isCompleted == true ? "task task--complete" : "task"
        }`}
      >
        {toDoItem.task}
      </label>
      <button value={toDoItem.task} onClick={handleClick}>
        🗑️
      </button>
    </div>
  );
};

export default Task;
