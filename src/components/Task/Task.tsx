import ToDoItem from "../../types/types";

type TaskProps = {
  toDoItem: ToDoItem;
};

const Task = ({ toDoItem }: TaskProps) => {
  return (
    <div className="toDoItem">
      <input type="checkbox" />
      <label htmlFor="">{toDoItem.task}</label>
      <a href="">X</a>
    </div>
  );
};

export default Task;
