import React from "react";
import { useDispatch } from "react-redux";
import { titles } from "../../constants/constants";
import { gameActions } from "../../store/game";
import "./Game.css";

function Game({ name, id }) {
  const dispatch = useDispatch();
  const handleGameSelection = () => {
    dispatch(gameActions.setTrivia(id));
    dispatch(gameActions.setTitle(titles.QUESTION));
  };
  return (
    <div className='game-wrapper'>
      <div className='game'>
        <span className='game-name'>{name}</span>
        <div className='btn-select-wrapper'></div>
        <div className='btn-select' onClick={handleGameSelection}>
          select
        </div>
      </div>
    </div>
  );
}

export default Game;
