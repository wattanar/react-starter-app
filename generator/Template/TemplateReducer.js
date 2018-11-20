import * as Type from "./TemplateType";

const intitialState = {
  hello: "Hello, World!",
};

const TemplateReducer = (state = intitialState, action) => {
  switch (action.type) {
    case Type.HELLO:
      return { ...state, hello: action.payload };
    default:
      return state;
  }
};

export default TemplateReducer;
