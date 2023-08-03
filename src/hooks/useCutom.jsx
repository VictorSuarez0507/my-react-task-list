import { useState, useEffect } from "react";

const useCustom = () => {
  const estadoInicial = JSON.parse(localStorage.getItem("listTask")) || [];
  const [listTask, setListTask] = useState(estadoInicial);

  useEffect( () => {
    localStorage.setItem("listTask", JSON.stringify(listTask));
  },[listTask]);

  const createTask = (dataTask) => {
    setListTask([...listTask, { ...dataTask, id: Date.now(), completed: false }]);
  };

  const updateTask = (taskId, updatedTask) => {
    setListTask(listTask.map((task) =>
    task.id === taskId ? { ...task, ...updatedTask } : task
  ));
  };

  const deleteTask = (taskId) => {
    setListTask(listTask.filter((task) => task.id !== taskId));
  };

  return {
    listTask,
    setListTask,
    createTask,
    updateTask,
    deleteTask,
  };
};

export default useCustom;
  
  
     
   

   

    

