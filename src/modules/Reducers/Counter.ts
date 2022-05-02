import { CounterState, CounterAction } from "../Types";

export const counterReducer = (
  state: CounterState = { counter: 0 },
  action: CounterAction
) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + action.payload.value,
      };
    case "DECREMENT":
      return {
        counter: state.counter - action.payload.value,
      };
    default:
      return state;
  }
};
