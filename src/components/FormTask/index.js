import React from "react";
import styles from "./FormTask.module.css";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { taskValidation } from "../../Tools/shemaValudation";
import AddBoxIcon from "@mui/icons-material/AddBox";

const FormTask = ({ setTodo }) => {
  return (
    <Formik
      validationSchema={taskValidation}
      onSubmit={setTodo}
      initialValues={{ task: "" }}
    >
      {(formikProps) => {
        return (
          <Form>
            <Field name="task">
              {({ field, form, meta }) => (
                <input
                  className={styles.form_input}
                  type="text"
                  {...field}
                  placeholder="Add Task"
                />
              )}
            </Field>
            <button className={styles.form_btn} type="submit">
              <AddBoxIcon />
            </button>

            <ErrorMessage name="task" component={"div"} className={styles.error} />
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormTask;
