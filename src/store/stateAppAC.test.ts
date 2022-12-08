import {getAllTack, getActiveTask, getCompletedTask} from './stateAppAC'
import { ALL_TASK, ACTIVE_TASK, COMPLETED_TASK } from './actionTypes';

describe('stateAppAC', () => {
    it('экшен для получения всех задачь', () => {
        const result = getAllTack();

        expect(result).toEqual({type: ALL_TASK});
    });
    it('экшен для получения невыполненых задачь', () => {
        const result = getActiveTask();

        expect(result).toEqual({type: ACTIVE_TASK})
    })
    it('экшен для получения выполненых задачь', () => {
        const result = getCompletedTask();

        expect(result).toEqual({type: COMPLETED_TASK})
    })
})