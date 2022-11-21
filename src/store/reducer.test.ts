import { TASK_TABLE_ADD } from './actionTypes';
import {addTaskReducer} from './reducer';

describe('reducer', () => {
    it('проверка reducer-а добавления задачи', () => {
        const testText = 'test text';

        const state = addTaskReducer(undefined, {type: TASK_TABLE_ADD, payload: testText });

        expect(state).toEqual({
            task: [
                {id: 0, text: testText, perform: false}
            ]
        });
    });
    it('проверка reducer-a на правильное создание id', () => {
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
    })
})