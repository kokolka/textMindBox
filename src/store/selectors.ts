import { StateType } from './store';

export const getTaskSelector = (state: StateType) => state.tasks.task;

export const getAppStateSelector = (state: StateType) => state.selectorActiveTasks.formForTask;
