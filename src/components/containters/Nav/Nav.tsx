import { FormEvent, FormEventHandler } from "react";
import InputBox from "../../InputBox/InputBox";

type NavProps = {
  inputTerm: string;
  handleSubmit: (event: FormEvent) => void;
  handleInput: (event: FormEvent<HTMLInputElement>) => void;
  handleReset: FormEventHandler<HTMLButtonElement>;
};

const Nav = ({
  inputTerm,
  handleSubmit,
  handleInput,
  handleReset,
}: NavProps) => {
  return (
    <div>
      <header>My Todos</header>
      <button onClick={handleReset}>Reset</button>
      <InputBox
        inputTerm={inputTerm}
        handleSubmit={handleSubmit}
        handleInput={handleInput}
      />
    </div>
  );
};

export default Nav;
