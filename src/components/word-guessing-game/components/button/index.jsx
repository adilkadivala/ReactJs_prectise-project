import "./style.css";

const Type = {
  CIRCULER: "circle",
  ROUNDED: "rounded",
};

const Button = ({
  label = "",
  onClick = () => {},
  type = Type.ROUNDED,
} = {}) => {
  const classname = `btn_${type}`;

  return (
    <button className={classname} onClick={onClick}>
      {label}
    </button>
  );
};

Button.Type = Type;
export default Button;
