import * as Type from "./NavbarType";

export const helloBack = () => ({
  type: Type.HELLO,
  payload: "Hello! ❤",
});

export const touchBurger = (currentBurger) => ({
  type: Type.TOUCH_BURGER,
  payload: currentBurger,
});
