import { ACTION_NAME } from "./AboutType";

const intitialState = {
  hello: "Hello, World!"
};

export const AboutReducer = (state = intitialState, action) => {
  switch (action.type) {
    case ACTION_NAME:
      return { ...state, hello: action.payload };
    default:
      return state;
  }
};
