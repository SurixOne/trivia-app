import React from "react";
import { useSelector } from "react-redux";
import { titles } from "../../constants/constants";
import "./Title.css";

function Title() {
  const title = useSelector((state) => state.game.title);
  const currentQuestion = useSelector((state) => state.game.currentQuestion);
  const totalQuestions = useSelector(
    (state) => state.game.trivia?.questions?.length
  );
  return (
    <div className='title'>
      {title +
        (title == titles.QUESTION
          ? " " + currentQuestion + "/" + totalQuestions
          : "")}
    </div>
  );
}

export default Title;
