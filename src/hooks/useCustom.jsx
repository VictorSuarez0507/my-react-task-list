import React from "react";
import { useState, useEffect } from "react";

export function useCustom () {

    const estadoIncial = JSON.parse(localStorage.getItem("taskList")) || [];
    const [ task, setTask] = useState("");
    const [taskList, setTaskList] = useState(estadoIncial);
    const [editTask, setEditTask] = useState(null);
    

    useEffect( () => {
        localStorage.setItem("taskList", JSON.stringify(taskList));
      },[taskList]);


    const newComplete = (newTask) => {
        setTaskList(
            taskList.map((item) =>{
                if(item.id === newTask.id){
                    
                    return {...item, realize: !item.realize}
                }
                return item;
            })
        )
    };

    const newEdit = ({id}) => {
        const findTask = taskList.find((newTask) => newTask.id === id);
        setEditTask(findTask);
    };

    const newUpdateTask = (title, id, realize) => {
        const newToDo = taskList.map((newTask) => 
            newTask.id === id ? {title, id, realize} : newTask
        );
        setTaskList(newToDo);
        setEditTask("");
    }

    useEffect(() => {
        if (editTask) {
            setTask(editTask.title);
        } else{
            setTask("");
        }
    }, [setTask, editTask]);

    const newHandleSubmit = (event) => {
        event.preventDefault();
        if(!editTask){
            setTaskList([...taskList, {id: Date.now(), title: task, realize: false}]);
            setTask("");  
        } else {
            newUpdateTask(task, editTask.id, editTask.realize)
        } 
    }

    const newHandleChange = (event) => {
        setTask(event.target.value);
    }


    const newDelete = ({ id }) => {
        setTaskList(taskList.filter((newTask) => newTask.id !== id));
    };

    



    return {
            
            taskList, 
            
            
            
            newComplete,
            newEdit, 
            newHandleSubmit, 
            newHandleChange,
            newUpdateTask,
            newDelete};
}

export default useCustom