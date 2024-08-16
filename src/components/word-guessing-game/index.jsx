import Controller from "./controller";
import KeyBoard from "./key-board/layout";
import Hint from "./layout";
import ScoreBoard from "./score-board";
import "./style.css";
import { Question } from "./constant";
import { useState } from "react";

const Default_Start_Index = 0;

function WordGuess() {
  const [questions, setQuestions] = useState(structuredClone(Question));
  console.log(questions);

  const [activeQuestionIndex, setActiveQuestionIndex] =
    useState(Default_Start_Index);

  const activeQuestion = questions[activeQuestionIndex];

  const { question, answer, hint } = activeQuestion || {};

  // next || previous

  const showPrevious = activeQuestionIndex > 0;
  const showNext = activeQuestionIndex < questions.length - 1;

  function handlePrevious() {
    if (activeQuestionIndex === 0) {
      return;
    }
    setActiveQuestionIndex(activeQuestionIndex - 1);
  }
  function handleNext() {
    if (activeQuestionIndex === questions.length - 1) {
      return;
    }
    setActiveQuestionIndex(activeQuestionIndex - 1);
  }

  return (
    <div>
      <div className="Hint_scoreboard">
        <Hint hint={hint} />
        <ScoreBoard />
      </div>
      <Controller
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        question={question}
        showPrevious={showPrevious}
        showNext={showNext}
      />
      <KeyBoard />
    </div>
  );
}

export default WordGuess;
