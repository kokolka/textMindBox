import React from 'react';
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
} from 'formik';

interface MyFormValues {
    newTask: string;
}

const TaskInputElement: React.FC = () => {
    const initialValues: MyFormValues = { newTask: '' };
    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    console.log({ values, actions });
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }}
            >
                <Form>
                    <Field id="newTask" name="newTask" placeholder="Введите новое задание" />
                    <button type="submit">Добавить</button>
                </Form>
            </Formik>
        </div>
    )
}

export default TaskInputElement;
