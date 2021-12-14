import React from "react";
import TaskItem from "../TaskItem";
import styles from "./TaskList.module.css";

const TaskList = ({ tasks, delTask, isChecked }) => {
    return (
    <ul className={styles.lists}>
      {tasks.map((el) => {
        return (
          <TaskItem
            isChecked={isChecked}
            delTask={delTask}
            key={el.id}
            id={el.id}
            task={el.task}
            isDone={el.isDone}
          />
        );
      })}
    </ul>
  );
};

export default TaskList;
