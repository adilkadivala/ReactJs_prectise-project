import "./style.css";
import Input from "../components/input";
import Text from "../components/text";

const Hint = ({ hint, enteredValue, handleInput = () => {} } = {}) => {
  const arr = hint.split("");

  function handleMyInput(index) {
    return function (value) {
      handleInput({ index, value });
    };
  }

  return (
    <div>
      {arr.map((data, index) => {
        if (data == "_") {
          return (
            <Input
              key={index}
              value={enteredValue[index] || ""}
              onInput={handleMyInput(index)}
            />
          );
        } else {
          return (
            <Text key={index} text={data} type={Text.StyleType.ANSWER_HINT} />
          );
        }
      })}
    </div>
  );
};

export default Hint;
