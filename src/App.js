import "./App.css";
import React, { useState} from "react";
import TaskList from "./components/TaskList";
import useTodo from "./Hooks/useTodo";
import SelectFormBlock from "./components/SelectFormBlock";


function App() {
  const { todoTask, setTodo, delTodo, updateTodo, todoFilter } = useTodo([]);
  const [select, setSelect] = useState("All");

  const setFormTodo = (val, formikBag) => {
    setTodo(val);
    formikBag.resetForm();
  };

  const setSelectHandler = (val) => {
    setSelect(val);
  };
 
  return (
    <section className="App">
      <SelectFormBlock setTodo={setFormTodo} selectSet={setSelectHandler} />
      {!todoTask.length && (
        <div>Add some Task</div>
      )}
      <TaskList
        delTask={delTodo}
        tasks={todoFilter(select)}
        isChecked={updateTodo}
      />
    </section>
  );
}

export default App;
