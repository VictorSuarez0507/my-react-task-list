import React, { useState } from "react";


const Task = ({ handleNewTask }) => {
    
    const [tasks, setTasks] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        handleNewTask({ tasks });
        setTasks("");
    };

    const handleChange = (e) => {
        const value = e.target.value
        setTasks(value);
    }

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
                    <button type="submit" className="buttonAdd">
                        Agregar
                    </button>      
                </div>
                
            </form>
        </div>
    );
};

export default Task;