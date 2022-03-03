import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import GreenButton from "../greenButton/GreenButton";
import "./FinalScore.css";

function FinalScore() {
  const name = useSelector((state) => state.user.name);
  const answers = useSelector((state) => state.game.answers);
  const trivia = useSelector((state) => state.game.trivia);
  const greenBtnTitle = "Play another";
  const handleBtnClick = () => {
    //real reset
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
