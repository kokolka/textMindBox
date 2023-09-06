import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../../../store/store';
import { performTask } from '../../../store/taskAC';
import { taskType } from '../../../store/taskReducer';
import { getAppStateSelector, getTaskSelector } from '../../../store/selectors';

export const TaskTableElement: React.FC<any> = () => {
  const tasksListSelector = useSelector((state: StateType) => getTaskSelector(state));
  const typeTask = useSelector((state: StateType) => getAppStateSelector(state));
  const dispatch = useDispatch();

  const [tasksList, setTasksList] = React.useState([] as Array<taskType> | []);

  React.useEffect(() => {
    const newArray = tasksListSelector.filter((el) => {
      debugger;
      if (typeTask === 'active' && !el.perform) {
        return el;
      } else if (typeTask === 'completed' && el.perform) {
        return el;
      } else if (typeTask === 'all') {
        return el;
      }
    });

    setTasksList(newArray);
  }, [tasksListSelector, typeTask]);

  return (
    <div>
      <div>
        <a href=""></a>
      </div>
      <div>
        {tasksList.map((el) => (
          <div key={el.id}>
            <div
              onClick={() => {
                dispatch(performTask(el.id));
              }}>
              {el.perform ? 'X' : 'O'}
            </div>
            <div>{el.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
