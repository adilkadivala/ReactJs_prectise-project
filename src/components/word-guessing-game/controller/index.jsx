import "./style.css";
import Button from "../components/button";
import Text from "../components/text";

const Controller = ({
  question,
  handleNext = () => {},
  handlePrevious = () => {},
  showNext,
  showPrevious,
} = {}) => {
  return (
    <div className="controller">
      {showPrevious && (
        <Button
          label="Prev"
          onClick={handlePrevious}
          type={Button.Type.CIRCULER}
        />
      )}

      <Text text={question} type={Text.StyleType.QUESTION_TITLE} />
      {showNext && (
        <Button label="Next" onClick={handleNext} type={Button.Type.CIRCULER} />
      )}
    </div>
  );
};

export default Controller;
