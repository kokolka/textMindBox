import { screen, render } from "@testing-library/react";
import renderer from 'react-test-renderer';
import React from 'react'
import {TaskTablePage} from './TaskTablePage';
import { TaskInputElement } from "./task-input-element/TaskInputElement";

//создание мока внутреннего компонента
jest.mock('./task-input-element/TaskInputElement', () => ({
    TaskInputElement: () => {
        return <div data-testid="TaskInputElement"/>
    }
}));



describe('TaskTablePage', () => {
    it('проверка рендера TaskTablePage', () => {

        const test = renderer.create(<TaskTablePage/>).toJSON();
        expect(test).toMatchSnapshot();
    })
    it('проверка рендера TaskInputElement', () => {

        render(<TaskTablePage/>);
        expect(screen.queryByTestId('TaskInputElement')).toBeInTheDocument();
    })
})
