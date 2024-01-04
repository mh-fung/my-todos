import "./InputBox.scss";
import { FormEventHandler } from "react";

type InputBoxProps = {
  inputTerm: string;
  handleSubmit: FormEventHandler;
  handleInput: FormEventHandler<HTMLInputElement>;
};

const InputBox = ({ inputTerm, handleSubmit, handleInput }: InputBoxProps) => {
  return (
    <form className="inputForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add your task here..."
        value={inputTerm}
        onInput={handleInput}
        className="inputForm__input"
      />
      <button className="inputForm__button" type="submit">
        +
      </button>
    </form>
  );
};

export default InputBox;
