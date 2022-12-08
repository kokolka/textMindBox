import taskReducer from './taskReducer';
import stateAppReducer from './stateAppReducer';
import { legacy_createStore as createStore, combineReducers } from "redux";
import { addTaskType, performTaskType } from './taskAC';
import { closeFormForTaskType, openFormForTaskType } from './stateAppAC';

type storeACType = addTaskType | performTaskType | openFormForTaskType | closeFormForTaskType;

const reducers = combineReducers({
    taskReducer,
    stateAppReducer
})

type reducersType = typeof reducers;
export type StateType = ReturnType<reducersType>; //тип глобального state

export const store = createStore<any, storeACType, unknown, unknown>(reducers);