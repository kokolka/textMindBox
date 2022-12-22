import { ACTIVE_TASK, ALL_TASK, COMPLETED_TASK} from "./actionTypes";
import { getActiveTaskType, getAllTackType, getCompletedTaskType } from "./stateAppAC"

type stateAppACType = getAllTackType | getActiveTaskType | getCompletedTaskType;

export type formForTaskType = 'all' | 'active' | 'completed'; //экспорт типов для тестирования 

const initialState = {
    formForTask: 'all' as formForTaskType
}

type StateType = typeof initialState;

const stateAppReducer = (state = initialState, action: stateAppACType): StateType => {
    switch(action.type){
        case ALL_TASK: {
            return {
                ...state,
                formForTask: 'all'
            }
        }
        case ACTIVE_TASK: {
            return {
                ...state,
                formForTask: 'active'
            }
        }
        case COMPLETED_TASK: {
            return {
                ...state,
                formForTask: 'completed'
            }
        }
        default: return state
    }
}

export default stateAppReducer;