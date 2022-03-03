import React from "react";
import { useSelector } from "react-redux";
import Game from "../game/Game";
import "./Games.css";

function Games() {
  const games = useSelector((state) => state.game.triviaList);

  return (
    <div className='games'>
      {games.map((game, index) => (
        <Game key={game.description} id={index} name={game.description}></Game>
      ))}
    </div>
  );
}

export default Games;
