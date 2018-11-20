import * as Type from "./HomeType";

export const helloBack = () => ({
  type: Type.HELLO,
  payload: "Hello! ❤",
});
