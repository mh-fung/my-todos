import { FormEvent, useState } from "react";
import Nav from "./components/containters/Nav/Nav";
import Content from "./components/containters/Content/Content";

function App() {
  const [inputTerm, setInputTerm] = useState<string>("");

  const [todoList, setTodoList] = useState<string[]>(["aloha", "Adios"]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(inputTerm);
  };
  const handlInput = (event: FormEvent<HTMLInputElement>) => {
    setInputTerm(event.currentTarget.value);
  };
  return (
    <div className="app">
      <header>My Todos</header>
      <Nav handleSubmit={handleSubmit} handleInput={handlInput} />
      <Content toDoListArray={todoList} />
    </div>
  );
}

export default App;
