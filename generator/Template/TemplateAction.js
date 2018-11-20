import * as Type from "./TemplateType";

export const helloBack = () => ({
  type: Type.HELLO,
  payload: "Hello! ❤",
});
