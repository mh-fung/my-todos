import { FormEvent, FormEventHandler } from "react";
import InputBox from "../../InputBox/InputBox";

type NavProps = {
  handleSubmit: (event: FormEvent) => void;
  handleInput: (event: FormEvent<HTMLInputElement>) => void;
  handleReset: FormEventHandler<HTMLButtonElement>;
};

const Nav = ({ handleSubmit, handleInput, handleReset }: NavProps) => {
  return (
    <div>
      <header>My Todos</header>
      <button onClick={handleReset}>Reset</button>
      <InputBox handleSubmit={handleSubmit} handleInput={handleInput} />
    </div>
  );
};

export default Nav;
