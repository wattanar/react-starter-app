import {
  COUNTER_INCREASE,
  COUNTER_DECREASE,
  COUNTER_SET_CURRENT
} from "./CounterType";

export const increaseCounter = counter => ({
  type: COUNTER_INCREASE,
  payload: (counter += 1)
});

export const decreaseCounter = counter => ({
  type: COUNTER_DECREASE,
  payload: (counter -= 1)
});

export const setCurrentCounter = number => ({
  type: COUNTER_SET_CURRENT,
  payload: number
});
