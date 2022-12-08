import { CLOSE_FORM_FOR_TASK, OPEN_FORM_FOR_TASK } from "./actionTypes";
import { closeFormForTaskType, openFormForTaskType } from "./stateAppAC"

type stateAppACType = openFormForTaskType | closeFormForTaskType;

const initialStateAppReducer = {
    formForTask: false
}

export type AppStateType = typeof initialStateAppReducer;

const stateAppReducer = (state = initialStateAppReducer, action: stateAppACType): AppStateType => {
    switch(action.type){
        case OPEN_FORM_FOR_TASK: {
            return {
                ...state,
                formForTask: true
            }
        }
        case CLOSE_FORM_FOR_TASK: {
            return {
                ...state,
                formForTask: false
            }
        }
        default: return state
    }
}

export default stateAppReducer;