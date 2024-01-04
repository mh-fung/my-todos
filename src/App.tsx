import { FormEvent, useState } from "react";
import Nav from "./components/containters/Nav/Nav";
import Content from "./components/containters/Content/Content";
import ToDoItem from "./types/types";

function App() {
  const [inputTerm, setInputTerm] = useState<string>("");

  const [toDoList, setToDoList] = useState<ToDoItem[]>([]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setToDoList([...toDoList, { task: inputTerm, iscompleted: false }]);
  };
  const handlInput = (event: FormEvent<HTMLInputElement>) => {
    setInputTerm(event.currentTarget.value);
  };

  return (
    <div className="app">
      <header>My Todos</header>
      <Nav handleSubmit={handleSubmit} handleInput={handlInput} />
      <Content toDoListArray={toDoList} />
    </div>
  );
}

export default App;
