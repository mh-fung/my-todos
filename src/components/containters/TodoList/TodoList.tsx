import ToDoItem from "../../TodoItem/TodoItem";
type toDoListProps = {
  toDoList: string[];
};

const ToDoList1 = ({ toDoList }: toDoListProps) => {
  const displayedToDoList = toDoList.map((item, index) => {
    return <ToDoItem key={"item" + index} toDoItem={item} />;
  });
  return <div className="toDoList">{displayedToDoList}</div>;
};

export default ToDoList1;
