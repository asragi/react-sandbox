import { AnyAction } from "@reduxjs/toolkit";

export type IncrementPayload = {
  value: number;
};

export interface IncrementAction extends AnyAction {
  type: "INCREMENT";
  payload: IncrementPayload;
}

export type DecrementPayload = {
  value: number;
};

export interface DecrementAction extends AnyAction {
  type: "DECREMENT";
  payload: DecrementPayload;
}

export type CounterAction = IncrementAction | DecrementAction;

export type CounterState = {
  counter: number;
};
