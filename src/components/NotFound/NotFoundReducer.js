import { ACTION_NAME } from "./NotFoundType";

const intitialState = {
  app_name: ""
};

export const NotFoundReducer = (state = intitialState, action) => {
  switch (action.type) {
    case ACTION_NAME:
      return { ...state, app_name: action.payload };
    default:
      return state;
  }
};
