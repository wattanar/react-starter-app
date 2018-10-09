import {
  COUNTER_CURRENT,
  COUNTER_INC,
  COUNTER_DEC,
  SET_CURRENT_COUNTER
} from './CounterType';

const intitialState = {
  counter: 0
};

export const CounterReducer = (state = intitialState, action) => {
  switch (action.type) {
    case COUNTER_CURRENT:
      return state;
    case COUNTER_INC:
      return { ...state, counter: action.payload };
    case COUNTER_DEC:
      return { ...state, counter: action.payload };
    case SET_CURRENT_COUNTER:
      return { ...state, counter: action.payload };
    default:
      return state;
  }
};
