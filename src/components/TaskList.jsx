import React, {useEffect} from "react";
export default function TaskList ({tareas, setTareas, listaTareas, setListaTareas, editarTareas, setEditarTareas}) {
    //TaskList: En este componente debe visualizarse la lista completa de tareas.
    
    function updateTareas ( titulo, id, completada){
        const newTareas = listaTareas.map((totalTareas) => 
            totalTareas.id === id ? {titulo, id, completada} : totalTareas
        );
        setListaTareas(newTareas);
        setEditarTareas("");
    }

    useEffect(() => {
        if (editarTareas) {
            setTareas(editarTareas.titulo);
        } else{
            setTareas("");
        }
    }, [setTareas, editarTareas]);
    
    function handlesubmit(event){
        event.preventDefault();
        if(!editarTareas){
            setListaTareas([...listaTareas, {id: Date.now(), titulo: tareas, completada: false}]);
            setTareas("");  
        } else {
            updateTareas(tareas, editarTareas.id, editarTareas.completada)
        } 
    }

    function handleChange(event){
        setTareas(event.target.value);
    }


    return(
        <form onSubmit={handlesubmit}>
            <input type="text" 
            placeholder="Añade una tarea" 
            className="tareaIngresada" 
            value={tareas}
            required
            onChange={handleChange}
            />
            <button type="submit" className="buttonAgregar">Agregar</button>        
        </form>
    ); 
}