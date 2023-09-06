import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, FormikErrors, FormikProps, withFormik } from 'formik';
import { addTask } from '../../../store/taskAC';

interface MyFormValues {
  newTask: string;
}

const InnerForm = (props: FormikProps<MyFormValues>) => {
  const { touched, errors, isSubmitting } = props;

  return (
    <Form>
      <div>
        <Field type="text" id="newTask" name="newTask" placeholder="Введите новое задание" />
        {touched.newTask && errors.newTask && <div>{errors.newTask}</div>}
      </div>

      <button type="submit" disabled={isSubmitting}>
        Add task
      </button>
    </Form>
  );
};

interface InitialFormValues {
  setData: (text: string) => void;
}

const MyForm = withFormik<InitialFormValues, MyFormValues>({
  mapPropsToValues: (props) => {
    return {
      newTask: '',
    };
  },
  validate: (value: MyFormValues) => {
    let errors: FormikErrors<MyFormValues> = {};
    if (value.newTask.length < 1) {
      errors.newTask = 'No empty';
    }
    return errors;
  },
  handleSubmit: (value, formikBag) => {
    formikBag.props.setData(value.newTask);
    formikBag.setSubmitting(false);
    value.newTask = '';
  },
})(InnerForm);

export const TaskInputElement: React.FC<any> = () => {
  const dispatch = useDispatch();
  const setData = (text: string) => {
    dispatch(addTask(text));
  };

  return (
    <div>
      <MyForm setData={setData} />
    </div>
  );
};
