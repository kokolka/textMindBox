import { CLOSE_FORM_FOR_TASK, OPEN_FORM_FOR_TASK } from "./actionTypes"


export type openFormForTaskType = {
    type: typeof OPEN_FORM_FOR_TASK
}
export const openFormForTask = (): openFormForTaskType => ({type: OPEN_FORM_FOR_TASK});

export type closeFormForTaskType = {
    type: typeof CLOSE_FORM_FOR_TASK
}
export const closeFormForTask = (): closeFormForTaskType => ({type: CLOSE_FORM_FOR_TASK});