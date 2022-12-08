import {StateType} from './store';


export const getTaskSelector = (state: StateType) => state.taskReducer.task;

export const getAppStateSelector = (state: StateType) => state.stateAppReducer.formForTask;