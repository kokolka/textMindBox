import { create } from 'react-test-renderer';
import {TaskTableElement} from './TaskTableElement';

describe('тест рендера элементов TaskTableElement', () => {
    it('тест рендера списка задач', () => {
        const renderer: any = create(<TaskTableElement/>).toJSON();

        console.log(renderer)
        expect(renderer.children[0].children.length).toEqual(1);
    })
    it('тесе рендера нижнего меню', () => {

    })
})