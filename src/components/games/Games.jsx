import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTriviaByLevel,
  levelSelector,
  triviaListSelector,
} from "../../store/game";
import Game from "../game/Game";
import "./Games.css";

function Games() {
  const dispatch = useDispatch();
  const level = useSelector(levelSelector);
  const games = useSelector(triviaListSelector);

  useEffect(() => {
    dispatch(fetchTriviaByLevel(level));
  }, []);

  return (
    <div className='games'>
      {games.map((game, index) => (
        <Game key={game.description} id={index} name={game.description}></Game>
      ))}
    </div>
  );
}

export default Games;
