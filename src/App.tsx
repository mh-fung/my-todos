import { FormEvent, useState } from "react";
import Nav from "./components/containters/Nav/Nav";
import Content from "./components/containters/Content/Content";
import ToDoItem from "./types/types";

function App() {
  const [inputTerm, setInputTerm] = useState<string>("");

  const [toDoList, setToDoList] = useState<ToDoItem[]>([]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setToDoList([...toDoList, { task: inputTerm, isCompleted: false }]);
  };
  const handlInput = (event: FormEvent<HTMLInputElement>) => {
    setInputTerm(event.currentTarget.value);
  };
  const handleChecked = (event: FormEvent<HTMLInputElement>) => {
    const updatedToDoList = toDoList.map((item) => {
      if (event.currentTarget.value === item.task) {
        return { task: item.task, isCompleted: event.currentTarget.checked };
      } else {
        return { task: item.task, isCompleted: item.isCompleted };
      }
    });
    setToDoList(updatedToDoList);
  };

  return (
    <div className="app">
      <header>My Todos</header>
      <Nav handleSubmit={handleSubmit} handleInput={handlInput} />
      {toDoList.length == 0 ? (
        <p>Nothing to see here yet... Add a task in the filed above!</p>
      ) : (
        <Content toDoListArray={toDoList} handleChecked={handleChecked} />
      )}
    </div>
  );
}

export default App;
