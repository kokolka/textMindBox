import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { StateType } from '../../../store/store';
import { TaskTableElement } from './TaskTableElement';

const mockStore = configureStore<StateType>([]);

describe('Тестирование отрисовки блока с кнопками', () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore({
      tasks: {
        taskIdCounter: 1,
        task: [{ text: 'Создать первую задачу', id: 0, perform: false }],
      },
      selectorActiveTasks: {
        formForTask: 'all',
      },
    });
  });

  test('renders with initial state', () => {
    const component = renderer.create(
      <Provider store={store}>
        <TaskTableElement />
      </Provider>,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
