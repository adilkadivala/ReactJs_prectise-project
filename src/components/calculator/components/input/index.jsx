function Input({ placeholder = "", onInput = () => {}, value } = {}) {
  function handleInput(e) {
    onInput(e.target.value);
  }
  return (
    <input
      type="text"
      placeholder={placeholder}
      onInput={handleInput}
      value={value}
    />
  );
}

export default Input;
