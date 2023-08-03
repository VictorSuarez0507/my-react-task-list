import React, { useState } from "react";
import Header from "./Header";
import Task from "./Task";
import useCustom from "../hooks/useCutom";

const TaskList = () => {
   
  const { listTask, createTask, deleteTask, updateTask, setListTask } = useCustom();
  
  const [editId, setEditId] = useState("");
  const [editTask, setEditTask] = useState("");
  const [editDescription, setEditDescription] = useState("");


  const handleNewTask = (dataTask) => {
    createTask(dataTask);
  };

  const handleComplete = (taskId) => {
    setListTask(listTask.map((task) =>
    task.id === taskId ? { ...task, completed: !task.completed } : task
  ));
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  const handleEdit = (task) => {
    setEditId(task.id);
    setEditTask(task.tasks);
    setEditDescription(task.description);
  };

  const handleCancel = () => {
    setEditId("");
    setEditTask("");
    setEditDescription("");
  };

  const handleSave = () => {
    updateTask(editId, { tasks: editTask, description: editDescription });
    handleCancel();
  };


  return (
    <div>
      <Header />
      <Task handleNewTask={handleNewTask} />
        <div>
          {listTask.map((task) => (
            <ul>
              <li className="listToDo" key={task.id}>
                  <table >
                      <tbody >
                          <tr >
                              <th>
                                  {editId === task.id ? (
                                      <input
                                          type="text"
                                          value={editTask}
                                          className="listToDo final"
                                          onChange={(e) => setEditTask(e.target.value)}
                                      />
                                      ) : (                                   
                                      <span className={`finalList ${task.completed ? "filled" : ""}`}>{task.tasks}</span>
                                      )}                          
                              </th>
                          </tr>
                          <tr>
                              <td>
                                  {editId === task.id ? (
                                      <textarea
                                          type="text"
                                          value={editDescription}
                                          className="listToDo final" 
                                          onChange={(e) => setEditDescription(e.target.value)}
                                          />
                                      ) : (
                                          <span className={`finalList ${task.completed ? "filled" : ""}`}>{task.description}</span>
                                      )}                                
                              </td>
                          </tr>
                      </tbody>
                  </table>               

                  <div>     
                      {editId === task.id ? (
                    <>
                      <button className="btncomplete" onClick={handleSave}>
                      <i className="fa-solid fa-check"></i>
                      </button>
                      <button className="btnEdit"  onClick={handleCancel}>
                      <i className="fa-solid fa-xmark"></i>
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="btncomplete"
                          onClick={() => handleComplete(task.id)}>
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
                    </>
                  )}                          
                  </div>                 
              </li>
            </ul>
          ))}       
        </div>
    </div>
  );
};

export default TaskList;



