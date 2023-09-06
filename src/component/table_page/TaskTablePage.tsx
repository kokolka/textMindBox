import React from 'react';
import { TaskInputElement } from './task-input-element/TaskInputElement';
import { TaskTableElement } from './task-table-element/TaskTableElement';
import { SelectorForTasks } from './selector-for-tasks/SelectorForTasks';

export const TaskTablePage: React.FC<any> = (props) => {
  return (
    <div>
      <TaskInputElement />
      <TaskTableElement />
      <SelectorForTasks />
    </div>
  );
};
