import React, { useEffect, useState } from "react";
import Header from "./Header";
import Task from "./Task";
import useCustom from "../hooks/useCutom";

const TaskList = () => {
   
  const { tasks, createTask, deleteTask, updateTask, setTasks } = useCustom();

  const [editmode, setEditmode] = useState(false);
  const [editId, setEditID] = useState("");
  //const [editingDescription, setEditingDescription] = useState("");

  

  const handleAddTask = (newTask) => {
    createTask(newTask);
  };
  const handleToggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  ////////////////////
  const handleEdit = (theTask) => {
    setTasks(theTask.title);
    setEditmode(true);
    setEditID(id);
};




  /*
  function handleEdit ({id}){
    const findTask = tasks.find((newTask) => newTask.id === id);
    setEditingTaskId(findTask);
};
console.log(setEditingTaskId)



  const handleStartEditing = (task) => {
    if (editingTaskId === task.id){
        updateTask(editingTaskId, { title: editingTitle, description: editingDescription });
    }
    setEditingTaskId(task.id);
    setEditingTitle(task.title);
    setEditingDescription(task.description);
  };
  */

  

 

  return (
    <div>
      <Header />
      <Task handleAddTask={handleAddTask} />
        <div>
          {tasks.map((task) => (
            <li className="listToDo" key={task.id}>
                <table >
                    <tbody >
                        <tr >
                            <th>
                                <input
                                    type="text"
                                    value={task.title}  
                                    className={`finalList ${task.completed ? "filled" : ""}`}
                                    onChange={(e) => e.preventDefault()}
                                />
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <textarea
                                    type="text"
                                    value={task.description}
                                    className={`finalList ${task.completed ? "filled" : ""}`}
                                    onChange={(e) => e.preventDefault()}     
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div>
                    <button className="btncomplete "
                        onClick={() => handleToggleComplete(task.id)}>
                        <i className="fa-regular fa-circle-check"></i>
                    </button>
                    <button className="btnEdit" 
                        onClick={() => handleEdit(task)}>
                        <i className="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button className="btnDelete"
                        onClick={() => handleDeleteTask(task.id)}>
                        <i className="fa-solid fa-trash-can"></i>
                    </button>                 
                </div>                 
            </li>
          ))}       
        </div>
    </div>
  );
};

export default TaskList;



