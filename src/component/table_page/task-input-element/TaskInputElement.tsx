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
            <h1>fff</h1>
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

// export default TaskInputElement;
