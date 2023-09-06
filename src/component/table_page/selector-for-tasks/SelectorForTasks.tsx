import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../../../store/store';
import { getActiveTask, getAllTack, getCompletedTask } from '../../../store/stateAppAC';
import { clearPerformTask } from '../../../store/taskAC';

export const SelectorForTasks = () => {
  const tasks = useSelector((state: StateType) => state.tasks.task);
  const dispatch = useDispatch();

  const [countCompletedTask, setCountCompletedTask] = React.useState(0);

  React.useEffect(() => {
    setCountCompletedTask(
      tasks.reduce((accumulator, currentValue) => {
        if (!currentValue.perform) {
          accumulator++;
        }
        return accumulator;
      }, 0),
    );
  }, [tasks]);

  return (
    <div>
      <div>{countCompletedTask}</div>
      <div>
        <button
          onClick={() => {
            dispatch(getAllTack());
          }}>
          All
        </button>
        <button
          onClick={() => {
            dispatch(getActiveTask());
          }}>
          Active
        </button>
        <button
          onClick={() => {
            dispatch(getCompletedTask());
          }}>
          Completed
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(clearPerformTask());
          }}>
          Clear completed
        </button>
      </div>
    </div>
  );
};
