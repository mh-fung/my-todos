import { FormEventHandler } from "react";

type InputBoxProps = {
  handleSubmit: FormEventHandler;
  handleInput: FormEventHandler<HTMLInputElement>;
};

const InputBox = ({ handleSubmit, handleInput }: InputBoxProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add your task here..."
        onInput={handleInput}
      />
      <button type="submit">+</button>
    </form>
  );
};

export default InputBox;
