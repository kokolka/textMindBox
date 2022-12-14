import { TASK_TABLE_ADD, TASK_TABLE_PERFORM } from './actionTypes';
import { addTaskType, performTaskType } from './taskAC';

type taskType = {
    text: string,
    id: number,
    perform: boolean
}

export const initialState = {
    task: [] as Array<taskType>
}  
export type StateType = typeof initialState;


const taskReducer = (state: StateType = initialState, action: addTaskType | performTaskType): StateType => {
    switch (action.type) {
        case TASK_TABLE_ADD: {
            let lastId = 0;

            if (state.task.length !== 0) {
                lastId = state.task[state.task.length - 1].id + 1;
            }

            const newTask = {
                id: lastId,
                text: action.payload,
                perform: false
            } as taskType

            return {
                ...state,
                task: [...state.task, newTask]
            }
        }
        case TASK_TABLE_PERFORM: {
            return {
                ...state,
                task: state.task.map(el => {
                    if (el.id === action.payload) {
                        return { ...el, perform: true }
                    }
                    return el;
                })
            }
        }
        default: return state
    }
}
export default taskReducer;
