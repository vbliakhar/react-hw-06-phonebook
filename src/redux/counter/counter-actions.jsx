import { INCREMENT, DECREMENT } from "./counter-types";
import test from "./counter-types";
export const increment = (value) => ({
  type: INCREMENT,
  payload: value,
});
export const decrement = (value) => ({
  type: test.DECREMENT,
  payload: value,
});
