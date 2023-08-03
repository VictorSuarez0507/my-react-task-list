import React, { useState } from "react";


const Task = ({ handleAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState({
    task: undefined,
    description: undefined,
  });

  

  const handleSubmit = (e) => {
    
    e.preventDefault();
    handleAddTask({ title, description });
    setTitle("");
    setDescription("");
  };
  function handleChange(event){
    const value = event.target.value
    if(value.length <= 3){
        setError({
            ...error,
            task: "La tarea debe tener mas de 3 caracteres"
          })
        }else {
          setError({
            ...error,
            task: ""
          })
    }
    setTitle(value);
}

function handleDescription(event) {
    setDescription(event.target.value);
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="task"></label>
          <input
            type="text"
            id="title"
            value={title}
            placeholder="Añade una tarea" 
            className="taskEntered" 
            onChange={handleChange}
            required
          />
          <button type="submit" className="buttonAdd">Agregar</button>  
                <br/>
                <span role="alert">{error.task}</span>
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