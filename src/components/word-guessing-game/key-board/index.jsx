import "./style.css";
import Button from "../components/button";

const KeyBoard = ({ handleKeypress }) => {
  const arr = [...new Array(26)];

  let start = 65;

  function handleClick(key) {
    return () => {
      handleKeypress(key);
    };
  }

  return (
    <div className="key_board">
      {arr.map((_, index) => {
        const currentKey = String.fromCharCode(start++);

        return (
          <Button
            key={index}
            label={currentKey}
            type={Button.Type.ROUNDED}
            onClick={handleClick(currentKey)}
          />
        );
      })}
    </div>
  );
};

export default KeyBoard;
