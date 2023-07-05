export default function TaskList ({tareas, setTareas, listaTareas, setListaTareas}) {
    //TaskList: En este componente debe visualizarse la lista completa de tareas.
    function handlesubmit(evento){
        evento.preventDefault();
        setListaTareas([...listaTareas, {id: Date.now(), titulo: tareas, completada: false}])
        setTareas("");
    }

    function handleChange(evento){
        setTareas(evento.target.value);
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