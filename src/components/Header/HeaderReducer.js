import { SAMPLE_ACTION } from './HeaderType';

const intitialState = {
  projectName: 'React Starter App'
};

export const HeaderReducer = (state = intitialState, action) => {
  switch (action.type) {
    case SAMPLE_ACTION:
      return { ...state, projectName: action.payload };
    default:
      return state;
  }
};
