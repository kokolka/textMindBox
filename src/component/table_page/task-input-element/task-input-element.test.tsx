import { create } from "react-test-renderer";
import TaskInputElement from './task-input-element';

describe('input', () => {
    it('проверка рендера поля ввода', () => {
        const result = create(<TaskInputElement/>);

        //нужно делать омк и проверять со снепшотом
        const element = result.root.findAllByType('input');
        expect(element).toBe('email');
    })
})
