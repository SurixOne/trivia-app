import "./App.css";
import Welcome from "./components/welcome/Welcome";
import { useSelector } from "react-redux";
import Games from "./components/games/Games";
import Greeting from "./components/greeting/Greeting";
import { useDispatch } from "react-redux";
import { gameActions, levelSelector, titleSelector } from "./store/game";
import Title from "./components/title/Title";
import { titles } from "./constants/constants";
import Question from "./components/question/Question";
import FinalScore from "./components/finalScore/finalScore";
import { isLoggedInSelector } from "./store/user";
import LevelInput from "./components/levelInput/LevelInput";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(isLoggedInSelector);
  const level = useSelector(levelSelector);
  const title = useSelector(titleSelector);
  const handleLevelChange = (event) => {
    dispatch(gameActions.setLevel(event.target.value));
  };

  return (
    <div className='App'>
      {isLoggedIn ? (
        <>
          <div className='header'>
            <LevelInput
              level={level}
              handleLevelChange={handleLevelChange}
              isLoggedIn={isLoggedIn}
            />
            <Greeting />
          </div>
          <Title />
          {title == titles.GAME && <Games />}
          {title == titles.QUESTION && <Question />}
          {title == titles.SCORE && <FinalScore />}
        </>
      ) : (
        <Welcome />
      )}
    </div>
  );
}

export default App;
