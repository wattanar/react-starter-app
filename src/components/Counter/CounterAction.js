import { COUNTER_INC, COUNTER_DEC, COUNTER_SET_CURRENT } from "./CounterType";

export const increase = counter => ({
  type: COUNTER_INC,
  payload: (counter += 1)
});

export const decrease = counter => ({
  type: COUNTER_DEC,
  payload: (counter -= 1)
});

export const setCurrent = () => ({
  type: COUNTER_SET_CURRENT,
  payload: 100
});
