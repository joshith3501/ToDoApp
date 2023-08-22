import { useRef, useState } from "react";
import './../styles/inputfield.css';

interface Prop {
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (e: React.FormEvent) => void;
}

const InputField = ({ setTodo, onSubmit }: Prop) => {
  let [inputValue, setInputValue] = useState("");
  let inputref = useRef<HTMLInputElement>(null);

  return (
    <>
      <form
        className="add-form"
        onSubmit={(e) => {
          onSubmit(e);
          inputref.current?.blur();
          setInputValue("");
        }}
      >
        <input
          type="text"
          placeholder="Enter your text"
          className="add-input"
          value={inputValue}
          onChange={(e) => {
            setTodo(e.target.value);
            setInputValue(e.target.value);
          }}
        />
        <button type="submit" value="submit" className="add-submit">
          Add
        </button>
      </form>
    </>
  );
};

export default InputField;
