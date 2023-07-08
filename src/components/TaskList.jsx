import React, {useEffect} from "react";
export default function TaskList ({task, setTask, taskList, setTaskList, editTask, setEditTask}) {
    
    function updateTask ( title, id, realize){
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
    
    function handleSubmit(event){
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
    }


    return(
        <form id="lista" onSubmit={handleSubmit}>
            <input id="actividad"
            type="text" 
            placeholder="Añade una tarea" 
            className="taskEntered" 
            value={task}
            required
            onChange={handleChange}
            />
            <button type="submit" className="buttonAdd">Agregar</button>        
        </form>
    ); 
}