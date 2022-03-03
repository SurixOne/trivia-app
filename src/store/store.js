import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import gameReducer from "./game";

const store = configureStore({
  reducer: { user: userReducer, game: gameReducer },
});

export default store;
