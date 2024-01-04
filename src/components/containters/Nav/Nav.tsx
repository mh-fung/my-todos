import { FormEvent } from "react";
import InputBox from "../../InputBox/InputBox";

type NavProps = {
  handleSubmit: (event: FormEvent) => void;
  handleInput: (event: FormEvent<HTMLInputElement>) => void;
};

const Nav = ({ handleSubmit, handleInput }: NavProps) => {
  return (
    <div>
      <InputBox handleSubmit={handleSubmit} handleInput={handleInput} />
    </div>
  );
};

export default Nav;
