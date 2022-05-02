import { combineReducers } from 'redux';
import { RootState, RootAction } from '../Types';
import { counterReducer } from './Counter';

export const rootReducer = combineReducers<RootState, RootAction>({
    counter: counterReducer,
});
