import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { addTask } from '../../../store/taskAC';

interface MyFormValues {
  newTask: string;
}

export const TaskInputElement: React.FC<any> = () => {
  const initialValues: MyFormValues = { newTask: '' };

  const dispatch = useDispatch();

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          dispatch(addTask(values.newTask));
          actions.setSubmitting(false);
          values.newTask = '';
        }}>
        <Form>
          <Field type="text" id="newTask" name="newTask" placeholder="Введите новое задание" />
          <button type="submit">Добавить задачу</button>
        </Form>
      </Formik>
    </div>
  );
};
