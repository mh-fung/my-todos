import { FormEventHandler } from "react";
import ToDoItem from "../../types/types";

type TaskProps = {
  toDoItem: ToDoItem;
  handleChecked: FormEventHandler<HTMLInputElement>;
};

const Task = ({ toDoItem, handleChecked }: TaskProps) => {
  return (
    <div className="toDoItem">
      <input value={toDoItem.task} type="checkbox" onClick={handleChecked} />
      <label
        htmlFor=""
        className={`${toDoItem.isCompleted == true ? "complete" : " "}`}
      >
        {toDoItem.task}
      </label>
      <a href="">X</a>
    </div>
  );
};

export default Task;
