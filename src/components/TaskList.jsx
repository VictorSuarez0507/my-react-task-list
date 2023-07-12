import React, {useEffect} from "react";
import useCustom from "../hooks/useCustom";

export default function TaskList () {
    const { task,taskList, newHandleSubmit,handleChange} = useCustom();

    return(
        <form id="lista" onSubmit={newHandleSubmit}>
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