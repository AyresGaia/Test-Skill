import React, { useState, useEffect } from "react";
import Question from "./Questions";
import Result from "./Result";
import questionsData from "../data/questions.json";

export default function Quiz({ category }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = questionsData[category];

  const handleAnswer = (selected) => {
    if (selected === questions[currentIndex].answer) setScore(score + 1);
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  return showResult ? (
    <Result score={score} total={questions.length} />
  ) : (
    <Question question={questions[currentIndex]} onAnswer={handleAnswer} />
  );
}
