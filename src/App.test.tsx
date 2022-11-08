import React from 'react';
import App from './App';
import { create } from 'react-test-renderer';
import TaskTablePage from './component/table_page/TaskTablePage';

describe('app', () => {
  it('отрисовка компоненты TaskTablePage', () => {
    const testRenderer = create(<App/>);
    const testInstance = testRenderer.root;

    const element = testInstance.findByType(TaskTablePage);
    expect(element.type).toBe(TaskTablePage);
  });
  
})
