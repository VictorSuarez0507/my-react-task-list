import React, {useEffect} from "react";
import useCustom from "../hooks/useCustom";

export default function TaskList () {

    const {task, 
        setTask,
        taskList, 
        setTaskList,
        editTask,
        setEditTask,
        newComplete,
        newEdit, 
        newHandleSubmit, 
        newHandleChange,
        newUpdateTask,
        newDelete} = useCustom();
    
    /*function updateTask ( title, id, realize){
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
    }, [setTask, editTask]);*/
    
    /*function handleSubmit(event){
        event.preventDefault();
        if(!editTask){
            setTaskList([...taskList, {id: Date.now(), title: task, realize: false}]);
            setTask("");  
        } else {
            updateTask(task, editTask.id, editTask.realize)
        } 
    }

    function handleChange(event){
        setTask(event.target.value);
    }*/


    return(
        <form id="lista" onSubmit={newHandleSubmit}>
            <input id="actividad"
            type="text" 
            placeholder="Añade una tarea" 
            className="taskEntered" 
            value={task}
            required
            onChange={newHandleChange}
            />
            <button type="submit" className="buttonAdd">Agregar</button>        
        </form>
    ); 
}