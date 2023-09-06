import { CLEAR_PERFORM_TASKS, TASK_TABLE_ADD, TASK_TABLE_PERFORM } from './actionTypes';
import { addTask, clearPerformTask, performTask } from './taskAC';

describe('taskAC', () => {
  it('добавление задачи', () => {
    const textForNewTask = 'Add task';

    const result = addTask(textForNewTask);

    expect(result).toEqual({ type: TASK_TABLE_ADD, payload: textForNewTask });
  });
  it('выполнение задачи', () => {
    const performTaskByID = 0;

    const result = performTask(performTaskByID);

    expect(result).toEqual({ type: TASK_TABLE_PERFORM, payload: performTaskByID });
  });
  it('отчистка задач', () => {
    const result = clearPerformTask();

    expect(result).toEqual({ type: CLEAR_PERFORM_TASKS });
  });
});
