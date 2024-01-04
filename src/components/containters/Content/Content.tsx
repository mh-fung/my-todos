import ToDoItem from "../../../types/types";
import ToDoList from "../TodoList/TodoList";
type ContentProps = {
  toDoListArray: ToDoItem[];
};
const Content = ({ toDoListArray }: ContentProps) => {
  return <ToDoList toDoList={toDoListArray} />;
};
export default Content;
