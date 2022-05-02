import { CounterAction, CounterState } from "./Counter";

export type {
  IncrementPayload,
  DecrementPayload,
  CounterAction,
  CounterState,
} from "./Counter";

export type RootState = {
  counter: CounterState;
};

export type RootAction = CounterAction;
