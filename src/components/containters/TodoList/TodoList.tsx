import ToDoItem from "../../../types/types";
import Task from "../../Task/Task";

type ToDoListProps = {
  toDoList: ToDoItem[];
};

const ToDoList = ({ toDoList }: ToDoListProps) => {
  const displayedToDoList = toDoList.map((item, index) => {
    return <Task key={"item" + index} toDoItem={item} />;
  });
  return <div className="toDoList">{displayedToDoList}</div>;
};

export default ToDoList;
