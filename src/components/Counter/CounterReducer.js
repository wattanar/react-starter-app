import { COUNTER_INC, COUNTER_DEC, COUNTER_SET_CURRENT } from "./CounterType";

const intitialState = {
  counter: 0
};

export const CounterReducer = (state = intitialState, action) => {
  switch (action.type) {
    case COUNTER_INC:
      return { ...state, counter: action.payload };
    case COUNTER_DEC:
      return { ...state, counter: action.payload };
    case COUNTER_SET_CURRENT:
      return { ...state, counter: action.payload };
    default:
      return state;
  }
};
