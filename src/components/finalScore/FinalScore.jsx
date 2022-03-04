import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { answersSelector, gameActions, triviaSelector } from "../../store/game";
import { nameSelector } from "../../store/user";
import GreenButton from "../greenButton/GreenButton";
import "./FinalScore.css";

function FinalScore() {
  const dispatch = useDispatch();
  const name = useSelector(nameSelector);
  const answers = useSelector(answersSelector);
  const trivia = useSelector(triviaSelector);
  const greenBtnTitle = "Play another";
  const handleBtnClick = () => {
    dispatch(gameActions.reset());
  };
  const getRightAnswers = () => {
    let rightAnswersCounter = 0;
    trivia.questions.forEach((question, index) => {
      question.answers.forEach((ans, i) => {
        if (ans == answers[index] && i == question.rightAnswerPosition) {
          rightAnswersCounter++;
        }
      });
    });
    return rightAnswersCounter;
  };

  return (
    <div>
      <div className='final-score'>
        <div>
          Congratulations <b>{name}</b>!
        </div>
        <div>
          You answered {getRightAnswers()}/{trivia?.questions?.length}
        </div>
      </div>
      <GreenButton
        greenBtnTitle={greenBtnTitle}
        handleBtnClick={handleBtnClick}
      />
    </div>
  );
}

export default FinalScore;
