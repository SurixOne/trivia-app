import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { gameActions } from "../../store/game";
import { userActions } from "../../store/user";
import LevelInput from "../levelInput/LevelInput";
import "./Welcome.css";

function Welcome() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const [level, setLevel] = useState("Beginner");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === "") {
      alert("Por favor, ingrese un nombre");
    } else {
      dispatch(userActions.setName(name));
      dispatch(gameActions.setLevel(level));
    }
  };

  return (
    <div className='welcome'>
      <div className='greetings'>
        <h1>
          Welcome to <b>Trivia App</b>
        </h1>
        <p>
          Enter your <span>name</span> and <span>level</span> to start playing!
        </p>
      </div>
      <form className='welcome-form' onSubmit={handleSubmit}>
        <div className='inputs'>
          <label>
            <span>Name:</span>
            <input
              spellCheck={false}
              className='text-input'
              type='text'
              value={name}
              onChange={handleNameChange}
            />
          </label>
          <LevelInput level={level} handleLevelChange={handleLevelChange} />
        </div>
        <div className='btn-wrapper'>
          <input className='form-btn' type='submit' value='start' />
        </div>
      </form>
    </div>
  );
}

export default Welcome;
