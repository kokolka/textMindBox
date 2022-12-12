import { StateType } from './store';
import { getTaskSelector, getAppStateSelector } from './selectors';


describe('selectors', () => {
    const testState = {
        stateAppReducer: {
            formForTask: 'all'
        },
        taskReducer: {
            task: [
                { id: 0, text: 'test text', perform: false },
                { id: 1, text: 'test text 1', perform: false },
                { id: 2, text: 'test text 2', perform: false }
            ]
        }
    } as StateType

    it('проверка получаемых знач из state', () => {

        const result = getTaskSelector(testState);

        expect(result).toEqual([
            { id: 0, text: 'test text', perform: false },
            { id: 1, text: 'test text 1', perform: false },
            { id: 2, text: 'test text 2', perform: false }
        ])
    });
    it('проверка получаемого значения из state о состоянии формы', () => {

        const result = getAppStateSelector(testState);

        expect(result).toEqual('all')
    })
})