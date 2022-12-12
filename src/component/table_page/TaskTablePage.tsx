import React from 'react';
import TaskInputElement from './task-input-element/task-input-element';
import TaskTableElement from './task-table-element/TaskTableElement';


const TaskTablePage: React.FC = () => {
    return(
        <div >
            <TaskInputElement />
            <TaskTableElement s='g'/>
        </div>
    )
};

export default TaskTablePage;