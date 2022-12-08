import { StateType } from './taskReducer';


export const getTaskSelector = (state: StateType) => state.task;