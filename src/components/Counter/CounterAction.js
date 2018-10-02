import {
  COUNTER_CURRENT,
  COUNTER_INC,
  COUNTER_DEC,
  SET_CURRENT_COUNTER
} from "../../Types";

export const current = () => ({
  type: COUNTER_CURRENT,
  payload: 0
});

export const inc = counter => ({
  type: COUNTER_INC,
  payload: (counter += 1)
});

export const dec = counter => ({
  type: COUNTER_DEC,
  payload: (counter -= 1)
});

export const setCurrent = () => ({
  type: SET_CURRENT_COUNTER,
  payload: 100
});
