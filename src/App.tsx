import { FormEvent, useState } from "react";
import Nav from "./components/containters/Nav/Nav";
import Content from "./components/containters/Content/Content";
import ToDoItem from "./types/types";
import "./App.scss";

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

  const handleClick = (event: FormEvent<HTMLButtonElement>) => {
    const updatedToDoList = toDoList.filter((item) => {
      return item.task !== event.currentTarget.value;
    });
    setToDoList(updatedToDoList);
  };

  const handleReset = () => {
    setToDoList([]);
  };

  return (
    <div className="app">
      <Nav
        handleSubmit={handleSubmit}
        handleInput={handlInput}
        handleReset={handleReset}
      />
      {toDoList.length == 0 ? (
        <p>Nothing to see here yet... Add a task in the field above!☝️</p>
      ) : (
        <Content
          toDoListArray={toDoList}
          handleChecked={handleChecked}
          handleClick={handleClick}
        />
      )}
    </div>
  );
}

export default App;
