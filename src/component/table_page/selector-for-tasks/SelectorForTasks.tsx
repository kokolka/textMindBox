import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActiveTask, getAllTack, getCompletedTask } from '../../../store/stateAppAC';
import { clearPerformTask } from '../../../store/taskAC';
import { getTaskSelector } from '../../../store/selectors';

export const SelectorForTasks = () => {
  const tasks = useSelector(getTaskSelector);
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
    <div className=" w-full flex justify-between items-center gap-2 text-xs text-gray-400 mt-3 px-5 pb-5">
      <div className="flex w-1/4">
        <p className="flex ">Задач: {countCompletedTask}</p>
      </div>

      <div className="flex gap-3 w-full justify-center">
        <button
          className="flex justify-center hover:text-gray-600 active:text-gray-200"
          onClick={() => {
            dispatch(getAllTack());
          }}>
          All
        </button>
        <button
          className="flex justify-center hover:text-gray-600 active:text-gray-200"
          onClick={() => {
            dispatch(getActiveTask());
          }}>
          Active
        </button>
        <button
          className="flex justify-center hover:text-gray-600 active:text-gray-200"
          onClick={() => {
            dispatch(getCompletedTask());
          }}>
          Completed
        </button>
      </div>

      <div className="flex">
        <button
          className="flex justify-center hover:text-gray-600 active:text-gray-200"
          onClick={() => {
            dispatch(clearPerformTask());
          }}>
          Clear completed
        </button>
      </div>
    </div>
  );
};
