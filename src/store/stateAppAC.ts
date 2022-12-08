import { ACTIVE_TASK, ALL_TASK, COMPLETED_TASK} from "./actionTypes"


export type getAllTackType = {
    type: typeof ALL_TASK
}
export const getAllTack = (): getAllTackType => ({type: ALL_TASK});

export type getActiveTaskType = {
    type: typeof ACTIVE_TASK
}
export const getActiveTask = (): getActiveTaskType => ({type: ACTIVE_TASK});

export type getCompletedTaskType = {
    type: typeof COMPLETED_TASK
}
export const getCompletedTask = (): getCompletedTaskType => ({type: COMPLETED_TASK});