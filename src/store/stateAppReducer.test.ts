import stateAppReducer from './stateAppReducer';
import { CLOSE_FORM_FOR_TASK, OPEN_FORM_FOR_TASK } from './actionTypes';

describe('stateAppReducer', () => {
    it('открытие формы для добавления задания', () => {
        const state = stateAppReducer(undefined, { type: OPEN_FORM_FOR_TASK });

        expect(state).toEqual({
            formForTask: true
        })
    });
    it('закрытие формы для добавления задания', () => {
        const testState = {
            formForTask: true
        }

        const state = stateAppReducer(testState, { type: CLOSE_FORM_FOR_TASK });

        expect(state).toEqual({
            formForTask: false
        })
    })
})