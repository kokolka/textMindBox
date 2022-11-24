import { addTaskType, performTaskType } from './taskAC';

type taskType = {
    text: string,
    id: number,
    perform: boolean
}

const initialState = {
    task: [] as Array<taskType>
}
type initialStateType = typeof initialState;

export const addTaskReducer = (state = initialState, action: addTaskType): initialStateType => {

    let lastId = 0;

    if(state.task.length !== 0){
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
};

export const performTaskReducer = (state = initialState, action: performTaskType): initialStateType => {
    return{
        ...state,
        task: state.task.map(el => {
            if(el.id === action.payload){
                return{...el, perform: true}
            }
            return el;
        })
    }
}