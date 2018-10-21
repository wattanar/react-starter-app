import { ACTION_NAME } from "./TemplateType";

const intitialState = {
  app_name: ""
};

export const TemplateReducer = (state = intitialState, action) => {
  switch (action.type) {
    case ACTION_NAME:
      return { ...state, app_name: action.payload };
    default:
      return state;
  }
};
