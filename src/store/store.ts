import { addTaskType, performTaskType } from './taskAC';
import taskReducer, {StateType, initialState } from './reducer';
import { legacy_createStore as createStore, AnyAction, combineReducers } from "redux";

export const store = createStore<any, addTaskType | performTaskType, unknown, unknown>(
    combineReducers({
        taskReducer
    }),
    initialState
);