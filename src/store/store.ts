type taskType = {
    text: string,
    id: number,
    perform: boolean
}

const state = {
    task: [] as Array<taskType>
}
export type StateType = typeof state;