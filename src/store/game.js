import { createSlice } from "@reduxjs/toolkit";
import { titles } from "../constants/constants";
const initialTriviaList = [
  {
    description: "MOVIE",
    questions: [
      {
        description:
          "What happens with the antagonist at the end of the movie Ghost?",
        answers: [
          "Gets taken by dark spirits",
          "Regrets from what he did to his friend",
          "Donates the money he took to charity",
          "Gets the paycheck from the nuns",
        ],
        rightAnswerPosition: 0,
        imageUrl:
          "https://i.pinimg.com/originals/5b/d4/9a/5bd49aa701879e18ac54a0f0c1a3013a.jpg",
      },
      {
        description:
          "Who impersonated the Joker on the last movie of the same name on October of 2019?",
        answers: [
          "Heath Ledger",
          "Jared Leto",
          "Jack Nicholson",
          "Joaquin Phoenix",
        ],
        rightAnswerPosition: 3,
        imageUrl:
          "https://cutewallpaper.org/21/joaquin-phoenix-joker-wallpapers/give-joaquin-phoenix-an-oscar-already-More-Joker-phone-.png",
      },
    ],
  },
  {
    description: "GEOGRAPHY",
    questions: [
      {
        description:
          "What is the name of the actor who impersonated the Joker on the last movie of the same name on October of 2019?",
        answers: [
          "Heath Ledger",
          "Jared Leto",
          "Jack Nicholson",
          "Joaquin Phoenix",
        ],
        rightAnswerPosition: 3,
        imageUrl:
          "https://ichef.bbci.co.uk/news/640/cpsprodpb/1728D/production/_109616849_joker01.jpg",
      },
    ],
  },
  {
    description: "HISTORY",
    questions: [
      {
        description:
          "What is the name of the actor who impersonated the Joker on the last movie of the same name on October of 2019?",
        answers: [
          "Heath Ledger",
          "Jared Leto",
          "Jack Nicholson",
          "Joaquin Phoenix",
        ],
        rightAnswerPosition: 3,
        imageUrl:
          "https://ichef.bbci.co.uk/news/640/cpsprodpb/1728D/production/_109616849_joker01.jpg",
      },
    ],
  },
  {
    description: "VIDEOGAMES",
    questions: [
      {
        description:
          "What is the name of the actor who impersonated the Joker on the last movie of the same name on October of 2019?",
        answers: [
          "Heath Ledger",
          "Jared Leto",
          "Jack Nicholson",
          "Joaquin Phoenix",
        ],
        rightAnswerPosition: 3,
        imageUrl:
          "https://ichef.bbci.co.uk/news/640/cpsprodpb/1728D/production/_109616849_joker01.jpg",
      },
    ],
  },
];
const initialGameState = {
  level: "",
  points: 0,
  triviaList: initialTriviaList,
  trivia: {},
  currentQuestion: 0,
  title: titles.GAME,
  answers: [],
};

const gameReducer = createSlice({
  name: "game",
  initialState: initialGameState,
  reducers: {
    setLevel(state, action) {
      state.level = action.payload;
    },
    increasePoints(state, action) {
      state.points += action.payload;
    },
    decreasePoints(state, action) {
      state.points -= action.payload;
    },
    setTrivia(state, action) {
      const trivia = state.triviaList[action.payload];
      state.trivia = trivia;
      state.currentQuestion = 1;
    },
    setTriviaList(state, action) {
      state.triviaList = action.payload;
    },
    setTitle(state, action) {
      state.title = action.payload;
    },
    nextQuestion(state) {
      state.currentQuestion++;
    },
    prevQuestion(state) {
      state.currentQuestion--;
      state.answers.pop();
    },
    answer(state, action) {
      state.answers.push(action.payload);
    },
    reset(state) {
      // set points,
    },
  },
});

export const gameActions = gameReducer.actions;

export default gameReducer.reducer;
