import "./App.css";
import Welcome from "./components/welcome/Welcome";
import { useSelector } from "react-redux";
import Games from "./components/games/Games";
import Greeting from "./components/greeting/Greeting";
import LevelSelector from "./components/levelSelector/LevelSelector";
import { useDispatch } from "react-redux";
import { gameActions } from "./store/game";
import Title from "./components/title/Title";
import { titles } from "./constants/constants";
import Question from "./components/question/Question";
import FinalScore from "./components/finalScore/finalScore";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const level = useSelector((state) => state.game.level);
  const title = useSelector((state) => state.game.title);
  const handleLevelChange = (event) => {
    dispatch(gameActions.setLevel(event.target.value));
  };

  return (
    <div className='App'>
      {isLoggedIn ? (
        <>
          <div className='header'>
            <LevelSelector
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
