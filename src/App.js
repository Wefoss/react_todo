import "./App.css";
import TaskList from "./components/TaskList";
import useTodo from "./custom/useTodo";
import FormTask from "./components/FormTask";

function App() {
  const { todoTask, setTodo, delTodo } = useTodo([
    {
      id: null,
      task: "",
      isDone: false,
    },
  ]);

  const setFormTodo = (val, formikBag) => {
    setTodo(val)
  };

  

  return (
    <section className="App">
      <FormTask setTodo={setFormTodo} />
      <TaskList delTask={delTodo} tasks={todoTask} />
    </section>
  );
}

export default App;
