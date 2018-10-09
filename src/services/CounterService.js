import Store from '../Store';
import { setCurrent } from '../components/Counter/CounterAction';

export const setCurrentCounter = () => {
  Store.dispatch(setCurrent());
};
