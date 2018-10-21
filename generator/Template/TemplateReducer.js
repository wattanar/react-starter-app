import { ACTION_NAME } from "./TemplateType";

const intitialState = {
  hello: "Hello, World!"
};

export const TemplateReducer = (state = intitialState, action) => {
  switch (action.type) {
    case ACTION_NAME:
      return { ...state, hello: action.payload };
    default:
      return state;
  }
};
