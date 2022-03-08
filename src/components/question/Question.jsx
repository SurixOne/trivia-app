import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { titles } from "../../constants/constants";
import {
  gameActions,
  questionSelector,
  totalQuestionsSelector,
  triviaSelector,
} from "../../store/game";
import GreenButton from "../greenButton/GreenButton";
import "./Question.css";

function Question() {
  const dispatch = useDispatch();
  const trivia = useSelector(triviaSelector);
  const currentQuestion = useSelector(questionSelector);
  const totalQuestions = useSelector(totalQuestionsSelector);
  const [selectedAnswerId, setSelectedAnswerId] = useState("");
  const handleAnswerClick = (ansId) => {
    setSelectedAnswerId(ansId);
  };
  const question = trivia.questions[currentQuestion - 1];
  const goBack = () => {
    if (currentQuestion > 0) {
      dispatch(gameActions.prevQuestion());
      setSelectedAnswerId("");
    }
  };
  const goNext = () => {
    if (
      question.answers[selectedAnswerId] != "" &&
      currentQuestion < totalQuestions
    ) {
      dispatch(gameActions.answer(selectedAnswerId));
      dispatch(gameActions.nextQuestion());
      setSelectedAnswerId("");
    }
  };
  const handleBtnClick = () => {
    dispatch(gameActions.answer(selectedAnswerId));
    dispatch(gameActions.setTitle(titles.SCORE));
  };
  const greenBtnTitle = "Finish";

  return (
    <div>
      <div className='question-wrapper' style={{ position: "relative" }}>
        <div
          className='question-image'
          style={{
            backgroundImage: "url('" + question.imageUrl + "')",
          }}
        />
        <div className='question'>{question.description}</div>
        {question.answers.map((ans, index) => {
          return (
            <div
              key={ans}
              className={
                "answer" +
                (ans == question.answers[selectedAnswerId]
                  ? " selected-ans"
                  : "")
              }
              onClick={() => handleAnswerClick(index)}
            >
              {ans}
            </div>
          );
        })}
        <div className='question-buttons'>
          {currentQuestion > 1 ? (
            <div onClick={goBack}>prev</div>
          ) : (
            <span></span>
          )}
          {currentQuestion < totalQuestions ? (
            <div onClick={goNext}>next</div>
          ) : (
            <span></span>
          )}
        </div>
      </div>
      {currentQuestion == totalQuestions &&
        question.answers[selectedAnswerId] != "" && (
          <GreenButton
            greenBtnTitle={greenBtnTitle}
            handleBtnClick={handleBtnClick}
          />
        )}
    </div>
  );
}

export default Question;
