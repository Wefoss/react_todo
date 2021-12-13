import * as Yup from "yup";

export const VALID_TASK = Yup.string()
  .matches(/^[A-Z][a-z]{3,15}$/, "incorrect writes task")
  .required("Is required");

export const taskValidation = Yup.object({
  task: VALID_TASK,
});
