import React from 'react';
import {
    Formik,
    Form,
    Field
} from 'formik';

interface MyFormValues {
    newTask: string;
}

export const TaskInputElement: React.FC<any> = () => {
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
                    <Field type="text" id="newTask" name="newTask" placeholder="Введите новое задание" />
                    <button type="submit">Добавить задачу</button>
                </Form>
            </Formik>
        </div>
    )
}
