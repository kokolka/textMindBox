import { TASK_TABLE_ADD, TASK_TABLE_PERFORM } from './actionTypes';

export type addTaskType = {
    type: typeof TASK_TABLE_ADD
    payload: string
}
export const addTask = (text: string): addTaskType => ({type: TASK_TABLE_ADD, payload: text})

export type performTaskType = {
    type: typeof TASK_TABLE_PERFORM
    payload: number
}
export const performTask = (id: number): performTaskType => ({type: TASK_TABLE_PERFORM, payload: id})