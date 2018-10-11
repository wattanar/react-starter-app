import { combineReducers } from 'redux';
import { CounterReducer } from './components/Counter/CounterReducer';
import { HeaderReducer } from './components/Header/HeaderReducer';

const Reducers = combineReducers({
  CounterReducer,
  HeaderReducer
});

export default Reducers;
