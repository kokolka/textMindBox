import {openFormForTask, closeFormForTask} from './stateAppAC'
import { CLOSE_FORM_FOR_TASK, OPEN_FORM_FOR_TASK } from './actionTypes';

describe('stateAppAC', () => {
    it('экшен для открытия формы для добавления задания', () => {
        const result = openFormForTask();

        expect(result).toEqual({type: OPEN_FORM_FOR_TASK});
    });
    it('экшен для закрытия формы для добаления задания', () => {
        const result = closeFormForTask();

        expect(result).toEqual({type: CLOSE_FORM_FOR_TASK})
    })
})