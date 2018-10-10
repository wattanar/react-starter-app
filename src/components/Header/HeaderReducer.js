import { SET_PROJECT_NAME } from "./HeaderType";

const intitialState = {
  projectName: "React Starter App"
};

export const HeaderReducer = (state = intitialState, action) => {
  switch (action.type) {
    case SET_PROJECT_NAME:
      return { ...state, projectName: action.payload };
    default:
      return state;
  }
};
