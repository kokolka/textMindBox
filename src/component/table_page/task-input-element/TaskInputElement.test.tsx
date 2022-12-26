import { create } from "react-test-renderer";
import {TaskInputElement} from "./TaskInputElement";


describe('Проверка рендера формы ввода в TaskInputElement', () => {
    it('проверка рендера поля ввода', () => {
        const result = create(<TaskInputElement/>);

        //нужно делать мок и проверять со снепшотом
        const element = result.root.findByType('input');
        expect(element.props.type).toBe('text');
    })
    it('проверка рендера кнопки', () => {
        const result = create(<TaskInputElement/>);

        //нужно делать мок и проверять со снепшотом
        const element = result.root.findByType('button');
        expect(element.props.type).toBe('submit');
    })
})
