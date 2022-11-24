import { TASK_TABLE_ADD, TASK_TABLE_PERFORM } from './actionTypes';
import {addTaskReducer, performTaskReducer} from './reducer';

describe('reducer', () => {
    it('проверка addTaskReducer-а добавления задачи', () => {
        const testText = 'test text';

        const state = addTaskReducer(undefined, {type: TASK_TABLE_ADD, payload: testText });

        expect(state).toEqual({
            task: [
                {id: 0, text: testText, perform: false}
            ]
        });
    });
    it('проверка addTaskReducer-a на правильное создание id', () => {
        const testText = 'test text 2';

        const testState = {
            task: [
                {id: 0, text: 'test text', perform: false}
            ]
        }

        const state = addTaskReducer(testState, {type: TASK_TABLE_ADD, payload: testText });

        expect(state).toEqual({
            task: [
                {id: 0, text: 'test text', perform: false},
                {id: 1, text: testText, perform: false}
            ]
        });
    });

    it('проверка выполнения performTaskReducer-а выполения задания', () => {
        const testId = 1;
        
        const testState = {
            task: [
                {id: 0, text: 'test text 1', perform: false},
                {id: 1, text: 'test text 2', perform: false},
                {id: 2, text: 'test text 2', perform: false}
            ]
        }

        const state = performTaskReducer(testState, {type: TASK_TABLE_PERFORM, payload: testId});

        expect(state).toEqual({
            task: [
                {id: 0, text: 'test text 1', perform: false},
                {id: 1, text: 'test text 2', perform: true},
                {id: 2, text: 'test text 2', perform: false}
            ]
        });
    })
})