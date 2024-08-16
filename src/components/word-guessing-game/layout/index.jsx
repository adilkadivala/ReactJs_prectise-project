import "./style.css";
import Input from "../components/input";
import Text from "../components/text";

const Hint = () => {
  return (
    <div>
      <Input />
      <Text text="T" type={Text.StyleType.ANSWER_HINT} />
    </div>
  );
};

export default Hint;
