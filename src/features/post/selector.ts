import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const postSelector = (state: RootState) => state.posts;

export const batchGetSelector = createSelector(postSelector, (r) => r.posts);
