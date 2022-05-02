import { ActionCreator } from "redux";

import {
  IncrementPayload,
  DecrementPayload,
  RootAction,
} from "../Types";

export const increment: ActionCreator<RootAction> = (
  payload: IncrementPayload
): RootAction =>
  ({
    type: "INCREMENT",
    payload,
  } as RootAction);

export const decrement: ActionCreator<RootAction> = (
  payload: DecrementPayload
): RootAction =>
  ({
    type: "DECREMENT",
    payload,
  } as RootAction);
