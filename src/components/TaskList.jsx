import React, {useEffect} from "react";
export default function TaskList ({task, setTask, taskList, 
    setTaskList, editTask, setEditTask, 
    description, setDescription, errors, setErrors}) {
    
    function updateTask ( title, body, id, realize){
        const newToDo = taskList.map((newTask) => 
            newTask.id === id ? {title, body, id, realize} : newTask
        );
        setTaskList(newToDo);
        setEditTask("");
    }

    useEffect(() => {
        if (editTask) {
            setTask(editTask.title);
            setDescription(editTask.body);
        } else{
            setTask("");
            setDescription("");
        }
    }, [setTask, editTask]);
    
    function handleSubmit(event){
        event.preventDefault();
        if(!editTask){
            setTaskList([...taskList, {id: Date.now(), title: task, body: description, realize: false}]);
            setTask("");
            setDescription("");  
        } else {
            updateTask(task, description, editTask.id, editTask.realize)
        } 
        window.location.reload();
    }

    function handleChange(event){
        const value = event.target.value
        if(value.length <= 3){
            setErrors({
                ...errors,
                task: "La tarea debe tener mas de 3 caracteres"
              })
            }else {
              setErrors({
                ...errors,
                task: ""
              })
        }
        setTask(value);
    }

    function handleDescription(event) {
        setDescription(event.target.value);
    }


    return(
        <form id="lista" onSubmit={handleSubmit}>
            <div>
                <input id="actividad"
                type="text" 
                placeholder="Añade una tarea" 
                className="taskEntered" 
                value={task}
                required
                onChange={handleChange}
                />
                
                <button type="submit" className="buttonAdd">Agregar</button>  
                <br/>
                <span role="alert">{errors.task}</span>
            </div>
            <div>
                <textarea rows="4" cols="10" 
                placeholder= "Descripcion de la tarea"
                className="bodyTask"
                value={description}
                onChange={handleDescription}/>
            </div>
                  
        </form>
    ); 
}