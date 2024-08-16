import "./style.css";
import Button from "../../components/button";

const KeyBoard = () => {
  const arr = [...new Array(26)];

  let start = 65;

  return (
    <div className="key_board">
      {arr.map((_, index) => {
        return (
          <Button
            key={index}
            label={String.fromCharCode(start++)}
            type={Button.Type.ROUNDED}
          />
        );
      })}
    </div>
  );
};

export default KeyBoard;
