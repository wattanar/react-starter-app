import * as Type from "./NavbarType";

const intitialState = {
  hello: "Hello, World!",
  brand: "react starter app",
  collapseOpen: false,
};

const NavbarReducer = (state = intitialState, action) => {
  switch (action.type) {
    case Type.HELLO:
      return { ...state, hello: action.payload };
    case Type.TOUCH_BURGER:
      return { ...state, collapseOpen: action.payload };
    default:
      return state;
  }
};

export default NavbarReducer;
