type toDoItemProps = {
  toDoItem: string;
};

const ToDoItem = ({ toDoItem }: toDoItemProps) => {
  return (
    <div className="toDoItem">
      <input type="checkbox" />
      <label htmlFor="">{toDoItem}</label>
      <a href="">X</a>
    </div>
  );
};

export default ToDoItem;
