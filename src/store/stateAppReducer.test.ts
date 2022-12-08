import stateAppReducer from './stateAppReducer';
import { ACTIVE_TASK, ALL_TASK, COMPLETED_TASK } from './actionTypes';

describe('stateAppReducer', () => {
    it('открытие формы для добавления задания', () => {
        const testState = {
            formForTask: 'completed'
        }

        const state = stateAppReducer(testState, { type: ALL_TASK});

        expect(state).toEqual({
            formForTask: 'all'
        })
    });
    it('закрытие формы для добавления задания', () => {
        
        const state = stateAppReducer(undefined, { type: ACTIVE_TASK });

        expect(state).toEqual({
            formForTask: 'active'
        })
    })
    it('закрытие формы для добавления задания', () => {
        
        const state = stateAppReducer(undefined, { type: COMPLETED_TASK });

        expect(state).toEqual({
            formForTask: 'completed'
        })
    })
})