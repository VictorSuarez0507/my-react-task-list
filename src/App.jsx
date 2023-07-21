import { useEffect, useState} from "react";
import './App.css'
import Header from './components/Header';
import TaskList from './components/TaskList';
import Task from './components/Task';

function App() {

  const estadoIncial = JSON.parse(localStorage.getItem("taskList")) || [];
  const [ task, setTask] = useState("");
  const [ description, setDescription] = useState("");
  const [taskList, setTaskList] = useState(estadoIncial);
  const [editTask, setEditTask] = useState(null);
  const [errors, setErrors] = useState({
    task: undefined,
    description: undefined,
  })

  useEffect( () => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  },[taskList]);

  return (
    <div className='container'>
      <div className='subContainer'>
        <div>
          <Header />
        </div>
        <div>
          <TaskList
            task = {task}
            setTask = {setTask}
            taskList = {taskList}
            setTaskList = {setTaskList}  
            editTask= {editTask}    
            setEditTask= {setEditTask} 
            description={description}
            setDescription={setDescription}  
            errors={errors}
            setErrors={setErrors}
          />
        </div>
        <div>
          <Task 
            taskList = {taskList}
            setTaskList = {setTaskList}
            setEditTask = {setEditTask}
          />
        </div>
      </div>
    </div>
  );

}
export default App
