import { ACTION_NAME } from "./HomeType";

const intitialState = {
  hello: "Hello, World!"
};

export const HomeReducer = (state = intitialState, action) => {
  switch (action.type) {
    case ACTION_NAME:
      return { ...state, hello: action.payload };
    default:
      return state;
  }
};
