import * as Type from "./HomeType";

const intitialState = {
  hello: "Hello, World!",
};

const HomeReducer = (state = intitialState, action) => {
  switch (action.type) {
    case Type.HELLO:
      return { ...state, hello: action.payload };
    default:
      return state;
  }
};

export default HomeReducer;
