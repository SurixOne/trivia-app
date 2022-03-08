import { render } from "@testing-library/react";
import store from "../../store/store";
import ReduxProvider from "../../utils/helpers/ReduxProvider";
import FinalScore from "./finalScore";
import * as redux from "react-redux";
import { levels, titles } from "../../constants/constants";
import "@testing-library/jest-dom";

describe("FinalScore tests", () => {
  let component;
  const children = <FinalScore />;
  const wrapper = <ReduxProvider reduxStore={store}>{children}</ReduxProvider>;
  const mockStore = {
    user: { name: "gg", isLoggedIn: true },
    game: {
      level: levels.BEGINNER,
      triviaList: [],
      selectedTriviaId: 0,
      currentQuestion: 0,
      title: titles.GAME,
      answers: [],
      triviaListState: {
        error: false,
        loading: false,
      },
    },
  };
  beforeEach(() => {
    const spy = jest.spyOn(redux, "useSelector");
    spy.mockImplementationOnce((selector) => selector(mockStore));
    component = render(wrapper);
  });
  test("renders user text message", () => {
    const playerText = component.getByText(mockStore.user.name);
    expect(playerText).toBeInTheDocument();
  });
});
