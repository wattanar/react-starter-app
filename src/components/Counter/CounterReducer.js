import {
  COUNTER_INCREASE,
  COUNTER_DECREASE,
  COUNTER_SET_CURRENT
} from './CounterType';

const intitialState = {
  counter: 0
};

export const CounterReducer = (state = intitialState, action) => {
  switch (action.type) {
    case COUNTER_INCREASE:
      return { ...state, counter: action.payload };
    case COUNTER_DECREASE:
      return { ...state, counter: action.payload };
    case COUNTER_SET_CURRENT:
      return { ...state, counter: action.payload };
    default:
      return state;
  }
};
