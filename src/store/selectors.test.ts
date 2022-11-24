import { getTaskSelector } from './selectors';

describe('selectors', () => {
    it('проверка получаемого значения из state', () => {
        const testState = {
            task: [
                { id: 0, text: 'test text', perform: false },
                { id: 1, text: 'test text 1', perform: false },
                { id: 2, text: 'test text 2', perform: false }
            ]
        }

        const result = getTaskSelector(testState);

        expect(result).toEqual([
            { id: 0, text: 'test text', perform: false },
            { id: 1, text: 'test text 1', perform: false },
            { id: 2, text: 'test text 2', perform: false }
        ])
    })
})