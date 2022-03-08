import React from "react";
import { useSelector } from "react-redux";
import { titles } from "../../constants/constants";
import {
  questionSelector,
  titleSelector,
  totalQuestionsSelector,
} from "../../store/game";
import "./Title.css";

function Title() {
  const title = useSelector(titleSelector);
  const currentQuestion = useSelector(questionSelector);
  const totalQuestions = useSelector(totalQuestionsSelector);
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
