import React from 'react';
import {TaskInputElement} from './task-input-element/TaskInputElement';
import {TaskTableElement} from './task-table-element/TaskTableElement';


export const TaskTablePage: React.FC<any> = (props) => {

    
    return (
        <div >
            <TaskInputElement/>
            <TaskTableElement/>
        </div>
    )
};
