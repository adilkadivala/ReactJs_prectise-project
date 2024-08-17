import "./style.css";
import Tag from "../components/tag";
import Text from "../components/text";

const ScoreBoard = ({ score }) => {
  return (
    <div>
      <Tag label={"Score"} />
      <Text type={Text.StyleType.SCORE} text={score} />
    </div>
  );
};

export default ScoreBoard;
