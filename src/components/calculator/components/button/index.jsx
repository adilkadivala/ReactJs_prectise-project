function Button({ lable = "", onClick = () => {}, dataOperation } = {}) {
  return (
    <button onClick={onClick} data-operation={dataOperation}>
      {lable}
    </button>
  );
}

export default Button;
