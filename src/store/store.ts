import taskReducer from './taskReducer';
import stateAppReducer from './stateAppReducer';
import { legacy_createStore as createStore, combineReducers } from 'redux';
import { addTaskType, performTaskType } from './taskAC';
import { getActiveTaskType, getAllTackType, getCompletedTaskType } from './stateAppAC';

type storeACType =
  | addTaskType
  | performTaskType
  | getAllTackType
  | getActiveTaskType
  | getCompletedTaskType;

const reducers = combineReducers({
  tasks: taskReducer,
  selectorActiveTasks: stateAppReducer,
});

type reducersType = typeof reducers;
export type StateType = ReturnType<reducersType>; //тип глобального state

export const store = createStore<any, storeACType, unknown, unknown>(reducers);
