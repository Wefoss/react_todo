import "./App.css";
import React from "react";
import TaskList from "./components/TaskList";
import useTodo from "./Hooks/useTodo";
import SelectFormBlock from "./components/SelectFormBlock";
import SelectedValue from "./Context/SelectedValue.js";

function App() {
  const {
    select,
    setSelect,
    todoTask,
    setTodo,
    delTodo,
    updateTodo,
    todoFilter,
  } = useTodo([]);

  const setFormTodo = (val, formikBag) => {
    setTodo(val);
    formikBag.resetForm();
  };

  return (
    <section className="App">
      <SelectedValue.Provider value={[select, setSelect]}>
        <SelectFormBlock setTodo={setFormTodo} />
      </SelectedValue.Provider>
      {!todoTask.length && <div>Add some Task</div>}
      <TaskList
        delTask={delTodo}
        tasks={todoFilter(select)}
        isChecked={updateTodo}
      />
    </section>
  );
}

export default App;
