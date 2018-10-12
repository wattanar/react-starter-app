import { SAMPLE_ACTION } from './HomeType';

const intitialState = {
  name: ''
};

export const HomeReducer = (state = intitialState, action) => {
  switch (action.type) {
    case SAMPLE_ACTION:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};
