import { FormEventHandler } from "react";

type InputBoxProps = {
  inputTerm: string;
  handleSubmit: FormEventHandler;
  handleInput: FormEventHandler<HTMLInputElement>;
};

const InputBox = ({ inputTerm, handleSubmit, handleInput }: InputBoxProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add your task here..."
        value={inputTerm}
        onInput={handleInput}
      />
      <button type="submit">+</button>
    </form>
  );
};

export default InputBox;
