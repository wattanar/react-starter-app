import Store from '../Store';
import { setCurrentCounter } from '../components/Counter/CounterAction';

export const _setCurrentCounter = () => {
  Store.dispatch(setCurrentCounter());
};
