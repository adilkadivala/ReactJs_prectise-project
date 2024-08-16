import { useState } from "react";
import "./style.css";

const Input = ({ onInput = () => {} } = {}) => {
  const [value, setValue] = useState();
  function handleInput(e) {
    onInput(e.target.value);
    setValue(e.target.value);
  }
  return <input type="text" value={value} onInput={handleInput} />;
};

export default Input;
