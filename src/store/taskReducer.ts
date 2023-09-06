import { TASK_TABLE_ADD, TASK_TABLE_PERFORM, CLEAR_PERFORM_TASKS } from './actionTypes';
import { addTaskType, clearPerformTaskType, performTaskType } from './taskAC';

type taskACType = addTaskType | performTaskType | clearPerformTaskType;

export type taskType = {
  text: string;
  id: number;
  perform: boolean; //true - выполненая задача, false - невыполненая задача
};

const initialState = {
  taskIdCounter: 1,
  task: [{ text: 'Создать первую задачу', id: 0, perform: false }] as Array<taskType>,
};
type StateType = typeof initialState;

const taskReducer = (state = initialState, action: taskACType): StateType => {
  switch (action.type) {
    case TASK_TABLE_ADD: {
      const newTask = {
        id: state.taskIdCounter,
        text: action.payload,
        perform: false,
      } as taskType;

      return {
        ...state,
        taskIdCounter: state.taskIdCounter + 1,
        task: [...state.task, newTask],
      };
    }
    case TASK_TABLE_PERFORM: {
      return {
        ...state,
        task: state.task.map((el) => {
          if (el.id === action.payload) {
            return { ...el, perform: true };
          }
          return el;
        }),
      };
    }
    case CLEAR_PERFORM_TASKS: {
      return {
        ...state,
        task: state.task.filter((el) => !el.perform),
      };
    }
    default:
      return state;
  }
};
export default taskReducer;
