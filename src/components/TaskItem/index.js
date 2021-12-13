import React from "react";
import styles from "./TaskItem.module.css";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import cx from 'classname'

const TaskItem = ({ task, isDone, delTask, id, isChecked }) => {
 
   const classNames = cx(styles.list_item, {
     [styles.complite]: isDone
   })

  return (
    <li className={classNames}>
      <p>{task}</p>
      <div>
        <span onClick={() => isChecked(id)} className={styles.check_icon_wrap}>
          <CheckIcon />
        </span>
        <button className={styles.btn} onClick={() => delTask(id)}>
          <DeleteIcon className={styles.icon} />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
