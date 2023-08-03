import React, { useState } from "react";

const Task = ({ handleNewTask }) => {
    
    const [tasks, setTasks] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState({
        tasks: undefined,
        description: undefined,
    });

    const handleSubmit = (e) => {
    e.preventDefault();
    handleNewTask({ tasks, description });
    setTasks("");
    setDescription("");
    };

    const handleChange = (e) => {
    const value = e.target.value
    if(value.length <= 3){
        setError({
            ...error,
            tasks: "La tarea debe tener mas de 3 caracteres"          
        })
        }else {
            setError({
            ...error,
            tasks: "",
            description: ""
        })
    }
    setTasks(value);
    }

    const handleDescription = (e) => {
        setDescription(e.target.value);
    }

    const formValid = Object.keys(error).every(
        (key) => error[key] === "")

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="task"></label>
                    <input
                        type="text"
                        id="tasks"
                        value={tasks}
                        placeholder="Añade una tarea" 
                        className="taskEntered" 
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" className="buttonAdd"
                        disabled={!formValid}>
                        Agregar
                    </button>  
                        <br/>
                    <span role="alert">{error.tasks}</span>
                </div>
                <div>
                    <label htmlFor="description"></label>
                    <textarea rows="4" cols="10"
                        type="text"
                        id="description"
                        value={description}
                        placeholder= "Descripcion de la tarea"
                        className="bodyTask"
                        onChange={handleDescription}
                    />
                </div>
            </form>
        </div>
    );
};

export default Task;