import { SAMPLE_ACTION } from './TemplateType';

const intitialState = {
  name: ''
};

export const TemplateReducer = (state = intitialState, action) => {
  switch (action.type) {
    case SAMPLE_ACTION:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};
