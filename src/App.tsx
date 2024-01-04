import { FormEvent, useState } from "react";
import Nav from "./components/containters/Nav/Nav";

function App() {
  const [inputTerm, setInputTerm] = useState<string>("");

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
    </div>
  );
}

export default App;
