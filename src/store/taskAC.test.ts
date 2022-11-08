
import {addTask, performTask} from './taskAC';

describe('taskAC', () => {
    it('добавление задачи', () => {
        const textForNewTask = 'Add task';

        const result = addTask(textForNewTask);

        expect(result).toEqual({type: 'taskTable/addTask', payload: textForNewTask})
    });
    it('выполнение задачи', () => {
        const performTaskByID = 0;

        const result = performTask(performTaskByID);

        expect(result).toEqual({type: 'taskTable/addDelete', payload: performTaskByID})
    })
})