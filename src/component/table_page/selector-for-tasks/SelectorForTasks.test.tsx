import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { SelectorForTasks } from './SelectorForTasks';
import { StateType } from '../../../store/store';

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
        <SelectorForTasks />
      </Provider>,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
