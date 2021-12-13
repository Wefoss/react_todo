import React from "react";
import style from "./TaskItem.module.css";

const TaskItem = ({ task, isDone, delTask, id }) => {
  return (
    <li className={style.list_item}>
      <div>
        <p>{task}</p>
        <p>{isDone}</p>
      </div>
      <button onClick={ () => delTask(id)}>delTask</button>
    </li>
  );
};

export default TaskItem;
