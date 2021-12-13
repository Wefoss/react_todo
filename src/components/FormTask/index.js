import React, { useState, useRef, useEffect } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import styles from "./FormTask.module.css";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { taskValidation } from "../../Tools/shemaValudation";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const FormTask = ({ setTodo }) => {
  const options = ["all", "Produces", "Pending"];
  const [openSelect, setOpenSelect] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Select");
  const isCurrentSelect = useRef();
  const selectHandler = () => {
    setOpenSelect(openSelect === true ? false : true);
  };

  const selectValueHandler = ({ target }) => {
    setSelectedValue(target.textContent);
    setOpenSelect(false);
  };



  useEffect(() => {
    const closeHandler = ({ target }) => {
      if (!isCurrentSelect.current.contains(target) && openSelect === true) {
        setOpenSelect(false);
      }
    };
    window.addEventListener("click", closeHandler);
    return () => {
      window.removeEventListener("click", closeHandler);
    };
  }, [isCurrentSelect, openSelect]);

  return (
    <Formik
      validationSchema={taskValidation}
      onSubmit={setTodo}
      initialValues={{ task: "", select: "" }}
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

            <button   className={styles.form_btn} type="submit">
              <AddBoxIcon />
            </button>

            <div className={styles.selec_wrap}>
              {openSelect && (
                <div className={styles.select_options}>
                  {options.map((el) => (
                    <p onClick={selectValueHandler} key={el}>
                      {el}
                    </p>
                  ))}
                </div>
              )}
              <div
                ref={isCurrentSelect}
                onClick={() => setOpenSelect(true)}
                className={styles.custom_select}
              >
                {selectedValue}
              </div>
            </div>

            <button
              onClick={selectHandler}
              type="button"
              className={styles.form_btn}
            >
              <ArrowDropDownIcon />
            </button>
            <ErrorMessage name="task" component={"div"} />
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormTask;
