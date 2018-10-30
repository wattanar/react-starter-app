import { NAV_TOGGLE } from "./HeaderType";

export const navToggle = toggleValue => ({
  type: NAV_TOGGLE,
  payload: toggleValue
});
