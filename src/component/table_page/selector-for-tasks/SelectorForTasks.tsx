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
    <div className=" w-full flex justify-evenly items-center gap-2 text-xs text-gray-400 mt-3 pb-5">
      <div className="flex w-1/4 pl-2">
        <p className="flex ">Задач: {countCompletedTask}</p>
      </div>

      <div className="flex gap-3 w-full justify-center">
        <button
          className="flex justify-center hover:text-gray-600 active:text-gray-200"
          onClick={() => {
            dispatch(getAllTack());
          }}>
          Все
        </button>
        <button
          className="flex justify-center hover:text-gray-600 active:text-gray-200"
          onClick={() => {
            dispatch(getActiveTask());
          }}>
          Активные
        </button>
        <button
          className="flex justify-center hover:text-gray-600 active:text-gray-200"
          onClick={() => {
            dispatch(getCompletedTask());
          }}>
          Завершенные
        </button>
      </div>

      <div className="flex pr-2">
        <button
          className="flex justify-center hover:text-gray-600 active:text-gray-200"
          onClick={() => {
            dispatch(clearPerformTask());
          }}>
          Отчистить список задач
        </button>
      </div>
    </div>
  );
};
