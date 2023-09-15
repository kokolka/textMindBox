import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { performTask } from '../../../store/taskAC';
import { taskType } from '../../../store/taskReducer';
import { getAppStateSelector, getTaskSelector } from '../../../store/selectors';

export const TaskTableElement: React.FC<any> = () => {
  const tasksListSelector = useSelector(getTaskSelector);
  const typeTask = useSelector(getAppStateSelector);
  const dispatch = useDispatch();

  const [tasksList, setTasksList] = React.useState([] as Array<taskType> | []);

  let TL = [] as Array<taskType> | [];

  const myRef = useRef<boolean>(false);

  React.useEffect(() => {
    const newArray = tasksListSelector.filter((el) => {
      if (typeTask === 'active' && !el.perform) {
        return el;
      } else if (typeTask === 'completed' && el.perform) {
        return el;
      } else if (typeTask === 'all') {
        return el;
      }
    });

    setTasksList(newArray);

    if (!myRef.current) {
      console.log(`create elem -> ${tasksListSelector.length}`);
      myRef.current = true;
    } else {
      console.log(`update elem-> ${tasksListSelector.length}`);
    }

    return () => {
      console.log(`delete elem-> ${tasksListSelector.length}`);
    };
  }, [tasksListSelector, typeTask]);

  return (
    <div>
      {tasksList.map((el) => (
        <div
          key={el.id}
          className=" px-5 grid grid-cols-6 items-center border-b-2 border-gray-200 py-3 w-96 h-full">
          <div
            className="pr-4 col-span-1"
            onClick={() => {
              dispatch(performTask(el.id));
            }}>
            {el.perform ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none">
                <path
                  d="M17.4129 8.93857L10.5 16.4799L6.58712 12.2113L8.06143 10.8598L10.5 13.5201L15.9386 7.58712L17.4129 8.93857Z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z"
                  fill="black"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z"
                  fill="black"
                />
              </svg>
            )}
          </div>
          <p className="whitespace-break-spaces  truncate col-span-5">{el.text}</p>
        </div>
      ))}
    </div>
  );
};
