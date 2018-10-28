import { ACTION_NAME } from "./NotFoundType";

const intitialState = {
  hello: "Hello, World!"
};

export const NotFoundReducer = (state = intitialState, action) => {
  switch (action.type) {
    case ACTION_NAME:
      return { ...state, hello: action.payload };
    default:
      return state;
  }
};
