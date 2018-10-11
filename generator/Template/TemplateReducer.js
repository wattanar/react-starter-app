import { TEMPLATE_ACTION } from './TemplateType';

const intitialState = {
  name: ''
};

export const CounterReducer = (state = intitialState, action) => {
  switch (action.type) {
    case TEMPLATE_ACTION:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};
