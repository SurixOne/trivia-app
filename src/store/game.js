import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTrivia } from "../api/triviaAPI";
import { levels, titles } from "../constants/constants";

export const fetchTriviaByLevel = createAsyncThunk(
  "trivia/fetchTriviaByLevel",
  async (level) => {
    const response = await fetchTrivia(level);
    return response.data;
  }
);

export const triviaSelector = (state) =>
  state.game.triviaList[state.game.selectedTriviaId];
export const questionSelector = (state) => state.game.currentQuestion;
export const totalQuestionsSelector = (state) =>
  state.game.triviaList[state.game.selectedTriviaId]?.questions.length;
export const answersSelector = (state) => state.game.answers;
export const titleSelector = (state) => state.game.title;
export const triviaListSelector = (state) => state.game.triviaList;
export const levelSelector = (state) => state.game.level;
export const loadingSelector = (state) => state.game.triviaListState.loading;

const initialGameState = {
  level: "",
  triviaList: [],
  selectedTriviaId: 0,
  currentQuestion: 0,
  title: titles.GAME,
  answers: [],
  triviaListState: {
    error: false,
    loading: false,
  },
};

const gameReducer = createSlice({
  name: "game",
  initialState: initialGameState,
  reducers: {
    setLevel(state, action) {
      state.level = action.payload;
    },
    setTrivia(state, action) {
      // const trivia = state.triviaList[action.payload];
      state.selectedTriviaId = action.payload;
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
      return { ...initialGameState, level: state.level };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTriviaByLevel.pending, (state) => {
      state.triviaListState.loading = true;
      state.triviaListState.error = false;
    });
    builder.addCase(fetchTriviaByLevel.fulfilled, (state, action) => {
      const data = action.payload;
      state.triviaListState.loading = false;
      state.triviaListState.error = false;
      state.triviaList = data.games;
    });
    builder.addCase(fetchTriviaByLevel.rejected, (state) => {
      state.triviaListState.loading = false;
      state.triviaListState.error = true;
    });
  },
});

export const gameActions = gameReducer.actions;

export default gameReducer.reducer;
