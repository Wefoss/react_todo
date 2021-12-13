import { Form, Formik, Field, ErrorMessage } from "formik";
import React from "react";

const FormTask = ({ setTodo }) => {
  return (
    <Formik onSubmit={setTodo} initialValues={{ task: "" }}>
      {(formikProps) => {
        return (
          <Form>
            <Field name="task" placeholder="task" />
            <ErrorMessage name="task" component={"div"} />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormTask;
