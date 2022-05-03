import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "../../features/post/slice";

export const store = configureStore({
  reducer: { postReducer },
});
