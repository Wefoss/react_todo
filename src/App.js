import "./App.css";
import TaskList from "./components/TaskList";
import useTodo from "./Hooks/useTodo";
import FormTask from "./components/FormTask";

function App() {
  const { todoTask, setTodo, delTodo, updateTodo } = useTodo([]);

  const setFormTodo = (val, formikBag) => {
    setTodo(val);
    formikBag.resetForm()
      };

  return (
    <section className="App">
      <FormTask setTodo={setFormTodo} />
      {!todoTask.length && <div style={{marginTop: '50px'}}>Add some Task</div>}
      <TaskList delTask={delTodo} tasks={todoTask} isChecked={updateTodo} />
    </section>
  );
}

export default App;
