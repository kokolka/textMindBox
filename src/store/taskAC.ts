
type addTaskType = {
    type: string, //*
    payload: string
}

export const addTask = (text: string): addTaskType => ({type: 'taskTable/addTask', payload: text})

type performTaskType = {
    type: string,
    payload: number
}

export const performTask = (id: number) => ({type: 'taskTable/addDelete', payload: id})