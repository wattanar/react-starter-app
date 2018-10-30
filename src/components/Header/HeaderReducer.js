import { NAV_TOGGLE } from "./HeaderType";

const intitialState = {
  nav_brand: "React Starter App",
  nav_toggle: false
};

export const HeaderReducer = (state = intitialState, action) => {
  switch (action.type) {
    case NAV_TOGGLE:
      return { ...state, nav_toggle: action.payload };
    default:
      return state;
  }
};
