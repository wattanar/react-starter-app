import * as Action from "./NotFoundType";

const intitialState = {
  hello: "Hello, World!",
};

const NotFoundReducer = (state = intitialState, action) => {
  switch (action.type) {
    case Action.HELLO:
      return { ...state, hello: action.payload };
    default:
      return state;
  }
};

export default NotFoundReducer;
