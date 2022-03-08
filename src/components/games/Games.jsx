import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadingText } from "../../constants/constants";
import {
  fetchTriviaByLevel,
  levelSelector,
  loadingSelector,
  triviaListSelector,
} from "../../store/game";
import Game from "../game/Game";
import "./Games.css";

function Games() {
  const dispatch = useDispatch();
  const level = useSelector(levelSelector);
  const games = useSelector(triviaListSelector);
  const fakeGame = { description: loadingText };
  const fakeGames = Array(4).fill(fakeGame);
  const loading = useSelector(loadingSelector);
  useEffect(() => {
    dispatch(fetchTriviaByLevel(level));
  }, []);

  return (
    <div className='games'>
      {(loading ? fakeGames : games).map((game, index) => (
        <Game
          key={game.description + index + index}
          id={index}
          name={game.description}
        ></Game>
      ))}
    </div>
  );
}

export default Games;
