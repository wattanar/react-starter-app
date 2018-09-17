const intitialState = {
  counter: 1
};

export const CounterReducer = (state = intitialState, action) => {
  switch (action.type) {
    case 'COUNTER_CURRENT':
      return state;
    case 'COUNTER_INC':
      return { ...state, counter: action.payload };
    case 'COUNTER_DEC':
      return { ...state, counter: action.payload };
    default:
      return state;
  }
};
