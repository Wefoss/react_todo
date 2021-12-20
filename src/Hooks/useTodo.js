import { useState} from "react";

const useTodo = (initValue) => {
  const [todoTask, setTodoTask] = useState(initValue);
  const [select, setSelect] = useState("All");

  return {
    select,
    setSelect,
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
      setTodoTask([...delTask]);
    },
    updateTodo: (value) => {
      const done = todoTask.map((el) =>
        el.id === value ? { ...el, isDone: !el.isDone } : el
      );

      setTodoTask([...done]);
    },

    todoFilter: (val) => {
      switch (val) {
        case "All":
          return todoTask;
        case "Completed":
          return todoTask.filter((el) => el.isDone);
        case "Pending":
          return todoTask.filter((el) => !el.isDone);
        default:
          return todoTask;
          
      }
    },
  };
};

export default useTodo;

// todoFilter: (val='All') => {
//   switch (val) {
//     case "All":
//       return setFilteredTask([...todoTask]);
//     case "Produces":
//       const produces = todoTask.filter((el) => !el.isDone);
//       return setFilteredTask([...produces]);
//     case "Pending":
//       const pending = todoTask.filter((el) => el.isDone);
//       return setFilteredTask([...pending]);
//     default:
//       return todoTask;
//       break;
//   }
// },
