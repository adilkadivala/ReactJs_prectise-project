import Controller from "./controller";
import KeyBoard from "./key-board";
import Hint from "./layout";
import ScoreBoard from "./score-board";
import "./style.css";
import { Questions } from "./constant";
import { useEffect, useState } from "react";

const Default_Start_Index = 0;

function WordGuess() {
  const [questions, setQuestions] = useState(structuredClone(Questions));
  const [score, setScore] = useState(0);
  const [enteredValue, setEnteredValue] = useState({});

  const [activeQuestionIndex, setActiveQuestionIndex] =
    useState(Default_Start_Index);

  const activeQuestion = questions[activeQuestionIndex];

  const { question, answer, hint, id } = activeQuestion || {};

  // next || previous

  const showPrevious = activeQuestionIndex > 0;
  const showNext = activeQuestionIndex < questions.length - 1;

  function handlePrevious() {
    if (activeQuestionIndex === 0) {
      return;
    }
    setActiveQuestionIndex(activeQuestionIndex - 1);
    setEnteredValue({});
  }

  function handleNext() {
    if (activeQuestionIndex === questions.length - 1) {
      return;
    }
    setActiveQuestionIndex(activeQuestionIndex + 1);
    setEnteredValue({});
  }

  // key press
  function handleKeypress(key) {
    console.log("Key Pressed", key);
  }

  function handleInput({ index, value }) {
    if (enteredValue[index]?.length > 1) {
      return;
    }
    const oldInfo = structuredClone(enteredValue);
    oldInfo[index] = value;
    setEnteredValue(oldInfo);
  }

  useEffect(() => {
    const hintArr = hint.split("");
    Object.keys(enteredValue).forEach((key) => {
      const val = enteredValue[key];
      hintArr[key] = val;
    });
    const finelAns = hintArr.join("");
    if (finelAns.toLowerCase() == answer) {
      setScore(score + 1);
      const oldQuestion = structuredClone(questions);
      oldQuestion[activeQuestionIndex].isAnswerd = true;
      setQuestions(oldQuestion);
      alert("Hey You did it");
    }
  }, [enteredValue]);

  return (
    <div>
      <div className="Hint_scoreboard">
        <Hint
          key={id}
          enteredValue={enteredValue}
          handleInput={handleInput}
          hint={hint}
        />
        <ScoreBoard score={score} />
      </div>
      <Controller
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        question={question}
        showPrevious={showPrevious}
        showNext={showNext}
      />
      <KeyBoard handleKeypress={handleKeypress} />
    </div>
  );
}

export default WordGuess;
