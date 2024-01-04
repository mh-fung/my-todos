import ToDoList1 from "../TodoList/TodoList";
type ContentProps = {
  toDoListArray: string[];
};
const Content = ({ toDoListArray }: ContentProps) => {
  return <ToDoList1 toDoList={toDoListArray} />;
};
export default Content;
