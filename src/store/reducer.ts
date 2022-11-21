import { addTaskType } from './taskAC';

type taskType = {
    text: string,
    id: number,
    perform: boolean
}

const initialState = {
    task: [

    ] as Array<taskType>
}

export const addTaskReducer = (state = initialState, action: addTaskType) => {

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
}