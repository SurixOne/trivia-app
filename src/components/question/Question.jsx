import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { titles } from "../../constants/constants";
import { gameActions } from "../../store/game";
import GreenButton from "../greenButton/GreenButton";
import "./Question.css";

function Question() {
  const dispatch = useDispatch();
  const trivia = useSelector((state) => state.game.trivia);
  const currentQuestion = useSelector((state) => state.game.currentQuestion);
  const totalQuestions = useSelector(
    (state) => state.game.trivia?.questions?.length
  );
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
          style={{
            backgroundImage: "url('" + question.imageUrl + "')",
            position: "absolute",
            filter: "opacity(0.3) blur(2px) drop-shadow(2px 4px 6px black)",
            width: "100%",
            height: "100%",
            left: "0",
            top: "0",
            backgroundSize: "cover",
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
