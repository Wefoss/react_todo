import React from "react";
import { Field, ErrorMessage } from "formik";

const FieldWrapper = ({ name, ...rest }) => {
  return (
    <>
      <Field name={name}>
        {({ field, form, meta }) => (
          <input type="text" {...field} {...rest} placeholder="Add Task" />
        )}
      </Field>
      <ErrorMessage name={name} component={"div"} />
    </>
  );
};

export default FieldWrapper;
