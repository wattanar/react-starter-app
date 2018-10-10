import Store from "../Store";
import { setCurrentCounter } from "../components/Counter/CounterAction";

export const _setCurrentCounter = number => {
  Store.dispatch(setCurrentCounter(number));
};
