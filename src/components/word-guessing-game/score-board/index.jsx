import "./style.css";
import Tag from "../components/tag";
import Text from "../components/text";

const ScoreBoard = () => {
  return (
    <div>
      <Tag label={"Score"} />
      <Text type={Text.StyleType.SCORE} text="23" />
    </div>
  );
};

export default ScoreBoard;
