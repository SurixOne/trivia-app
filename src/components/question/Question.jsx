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
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const handleAnswerClick = (ans) => {
    setSelectedAnswer(ans);
  };
  const question = trivia.questions[currentQuestion - 1];
  const goBack = () => {
    if (currentQuestion > 0) {
      dispatch(gameActions.prevQuestion());
      setSelectedAnswer("");
    }
  };
  const goNext = () => {
    if (selectedAnswer != "" && currentQuestion < totalQuestions) {
      dispatch(gameActions.answer(selectedAnswer));
      dispatch(gameActions.nextQuestion());
      setSelectedAnswer("");
    }
  };
  const handleBtnClick = () => {
    dispatch(gameActions.answer(selectedAnswer));
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
        {question.answers.map((ans) => {
          return (
            <div
              key={ans}
              className={
                "answer" + (ans == selectedAnswer ? " selected-ans" : "")
              }
              onClick={() => handleAnswerClick(ans)}
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
      {currentQuestion == totalQuestions && selectedAnswer != "" && (
        <GreenButton
          greenBtnTitle={greenBtnTitle}
          handleBtnClick={handleBtnClick}
        />
      )}
    </div>
  );
}

export default Question;
