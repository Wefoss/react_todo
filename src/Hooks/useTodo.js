import React, { useState } from "react";

const useTodo = (initValue) => {
  const [todoTask, setTodoTask] = useState(initValue);
  return {
    todoTask,
    setTodo: (value) => {
      const newTask = {
        id: Math.random() * 1000,
        task: value.task,
        isDone: false,
      };
      setTodoTask([...todoTask, newTask]);
    },
    delTodo: (id) => {
      const delTask = todoTask.filter((el) => el.id !== id);
      return setTodoTask([...delTask]);
    },
    updateTodo: (value) => {
      const done = todoTask.map((el) =>
        el.id === value ? { ...el, isDone: !el.isDone } : el);
      setTodoTask([...done]);
    },
  };
};

export default useTodo;
